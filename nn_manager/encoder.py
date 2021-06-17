import os
from os.path import abspath, join
from typing import List

import matplotlib.pyplot as plt
import numpy as np
import tensorflow.keras.backend as K
from PIL import Image
from mtcnn import MTCNN
from numpy import asarray
from tensorflow.keras.layers import Layer
from tensorflow.keras.models import model_from_json
from tensorflow.python.keras import Input
from tensorflow.python.keras.models import Model
from tensorflow.python.keras.optimizers import Adam
from tensorflow.python.keras.utils.vis_utils import plot_model


class TripletLossEncoder:
    face_labels = []
    cropped_faces = []
    x_anchor_labels = []
    x_positive = []
    x_anchor = []

    def __init__(self,
                 model_path: str = "Models/Inception_ResNet_v1.json",
                 ):
        self.model_path = abspath(model_path)
        json_file = open(model_path, 'r')
        loaded_model_json = json_file.read()
        self.enc_model = model_from_json(loaded_model_json)
        self.enc_model.trainable = True

        json_file.close()
        self.mtcnn_detector = MTCNN()

    def detect_face(self, filename: str, required_size=(160, 160)):
        """
        Detect face from file (buat testing aja sih)
        :param filename: Image file name
        :param required_size: Image pixel size. Default is 160 x 160
        :return:
        """
        img = Image.open(abspath(filename))

        # Convert to RGB
        img = img.convert('RGB')
        pixels = np.asarray(img)  # convert to numpy array

        results = self.mtcnn_detector.detect_faces(pixels)  # detect faces using MTCNN
        # Generate Bounding box from detected face
        x1, y1, width, height = results[0]['box']

        x1, y1 = abs(x1), abs(y1)
        x2, y2 = x1 + width, y1 + height

        # extract the face
        face = pixels[y1: y2, x1: x2]

        # resize pixels to the model size
        image = Image.fromarray(face)
        image = Image.resize(required_size)
        face_array = asarray(image)

        return face_array

    def detect_and_store_faces(self, dataset_path: str) -> None:
        """
        Generate dataset from available images. crop and store it to destined dataset
        :param dataset_path: string of raw dataset path
        """
        i = 0
        face_labels = []
        cropped_faces = []
        for person in os.listdir(dataset_path):
            for filename in os.listdir(join(dataset_path, person)):

                # Detect faces
                try:
                    face = self.detect_face(join(dataset_path, person, filename))
                except IOError as e:
                    print(type(e), str(e))
                    continue
                cropped_faces.append(face)

                # Save labels
                label = person
                face_labels.append(label)

                i += 1
                if i % 50 == 0:
                    print(str(i), " images loaded !")

        print("\nTotal " + str(i), " images loaded !")

        self.face_labels = np.array(face_labels)
        self.cropped_faces = np.array(cropped_faces)
        print(self.face_labels.shape)
        print(self.cropped_faces.shape)
        n_ids = len(np.unique(face_labels))
        print(n_ids)
        index = 70
        plt.imshow(self.cropped_faces[index])
        print(self.face_labels[index])

    @staticmethod
    def distance(a, b) -> np.ndarray:
        """
        Find the Euclidean distance between 2 faces
        :param a: first image numpy array
        :param b: second image numpy array
        :return: float of distance.
        """
        a /= np.sqrt(np.maximum(np.sum(np.square(a)), 1e-10))
        b /= np.sqrt(np.maximum(np.sum(np.square(b)), 1e-10))

        dist = np.sqrt(np.sum(np.square(a - b)))

        return dist

    @staticmethod
    def distance_batch(a, b):
        """
        Find Euclidean distances between 2 batch of Faces
        :param a:
        :param b:
        :return:
        """

        a /= np.sqrt(np.maximum(np.sum(np.square(a), axis=1, keepdims=True), 1e-10))
        b /= np.sqrt(np.maximum(np.sum(np.square(b), axis=1, keepdims=True), 1e-10))

        dist = np.sqrt(np.sum(np.square(a - b), axis=1))

        return dist

    @staticmethod
    def normalize_single(x):
        """
        Normalize single face.
        :param x:
        :return:
        """
        axis = (0, 1, 2)

        mean = np.mean(x, axis)
        std = np.std(x, axis)

        size = x.size
        adj_std = np.maximum(std, 1 / np.sqrt(size))

        x = (x - mean) / adj_std
        return x

    @staticmethod
    def normalize_batch(x):
        """
        Method to normalize a Batch of faces
        :param x: the image object
        :return:
        """
        axis = (1, 2, 3)
        mean = np.mean(x, axis, keepdims=True)
        std = np.std(x, axis, keepdims=True)

        size = x[0].size
        adj_std = np.maximum(std, 1 / np.sqrt(size))
        x = (x - mean) / adj_std

        return x

    @staticmethod
    def normalize_triplet_batch(x):
        """
        To normalize a Triplet batch
        :param x:
        :return:
        """
        axis = (2, 3, 4)

        mean = np.mean(x, axis, keepdims=True)
        std = np.std(x, axis, keepdims=True)

        size = x[0][0].size
        adj_std = np.maximum(std, 1 / np.sqrt(size))

        x = (x - mean) / adj_std
        return [x[0], x[1], x[2]]

    def generate_all_possible_anchor_positive_combinations(self) -> None:
        """
        Generate all possible Anchor-Positive Combinations
        :return: Void
        """
        x_anchor = []
        x_positive = []

        x_anchor_labels = []
        persons_list = np.unique(self.face_labels)

        for person in persons_list:

            filter_person = (self.face_labels == person).reshape(self.cropped_faces.shape[0])
            x_person = self.cropped_faces[filter_person]

            for face1 in range(x_person.shape[0]):
                for face2 in range(face1 + 1, x_person.shape[0]):
                    x_anchor.append(x_person[face1])
                    x_positive.append(x_person[face2])

                    x_anchor_labels.append(person)

        self.x_anchor = np.array(x_anchor)
        self.x_positive = np.array(x_positive)

        self.x_anchor_labels = np.array(x_anchor_labels)

        print(self.x_anchor.shape)
        print(self.x_positive.shape)

    def get_batch(self, n_rand_triplets, n_hard_triplets) -> List[np.ndarray]:
        """
        To generate a batch of Triplets ( Anchor-Positive-Negative )
        Generate n_rand_triplets no. of Random Triplets
        :param n_rand_triplets:
        :param n_hard_triplets:
        :return:
        """

        filters = np.random.choice(list(range(0, self.x_anchor.shape[0])), int(n_rand_triplets))

        x_anchor_random = self.x_anchor[filters]
        x_positive_random = self.x_positive[filters]
        x_negative_random = []

        x_anchor_random_labels = self.x_anchor_labels[filters]

        for i in range(int(n_rand_triplets)):
            flag = False
            while not flag:
                index = np.random.randint(0, self.cropped_faces.shape[0])
                if self.face_labels[index] != x_anchor_random_labels[i]:
                    x_negative_random.append(self.cropped_faces[index])
                    flag = True

        x_negative_random = np.array(x_negative_random)

        # If only hard triplets required
        if n_rand_triplets == 0:
            x_negative_random = x_anchor_random  # Empty arrays

        # Generate n_hard_triplets no. of Hard Triplets ( Positive distance > Negative distance )
        x_negative_samples = []

        for i in range(self.x_anchor.shape[0]):

            flag = False
            while not flag:
                index = np.random.randint(0, self.cropped_faces.shape[0])
                if self.face_labels[index] != self.x_anchor_labels[i]:
                    x_negative_samples.append(self.cropped_faces[index])
                    flag = True

        x_negative_samples = np.array(x_negative_samples)

        negative_distances = self.distance_batch(self.enc_model.predict(self.normalize_batch(self.x_anchor)),
                                                 self.enc_model.predict(self.normalize_batch(x_negative_samples)))

        positive_distances = self.distance_batch(self.enc_model.predict(self.normalize_batch(self.x_anchor)),
                                                 self.enc_model.predict(self.normalize_batch(self.x_positive)))

        distances = negative_distances - positive_distances

        filters = np.argsort(distances)[:int(n_hard_triplets)]

        x_anchor_hard = self.x_anchor[filters]
        x_positive_hard = self.x_positive[filters]
        x_negative_hard = x_negative_samples[filters]

        # Concatenate to form a Triplet batch of required size
        x_anchor_batch = np.concatenate((x_anchor_random, x_anchor_hard))
        x_positive_batch = np.concatenate((x_positive_random, x_positive_hard))
        x_negative_batch = np.concatenate((x_negative_random, x_negative_hard))

        return [x_anchor_batch, x_positive_batch, x_negative_batch]

    @staticmethod
    def create_encoding_trainer(input_shape, enc_model, margin=0.5):
        # Define Input tensors
        anchor = Input(input_shape, name="anchor_input")
        positive = Input(input_shape, name="positive_input")
        negative = Input(input_shape, name="negative_input")

        # Generate the encodings (feature vectors) for the three images
        enc_anchor = enc_model(anchor)
        enc_positive = enc_model(positive)
        enc_negative = enc_model(negative)

        # TripletLoss Layer
        loss_layer = TripletLossLayer(margin=margin, name='triplet_loss')(enc_anchor, enc_positive, enc_negative)

        # Connect the inputs with the outputs
        enc_trainer = Model(inputs=[anchor, positive, negative], outputs=loss_layer, name="Trainer Model")

        # return the model
        return enc_trainer

    def compile_trainer_model(self):
        enc_trainer_model = self.create_encoding_trainer((160, 160, 3), self.enc_model, margin=0.5)
        enc_trainer_model.compile(optimizer=Adam(lr=0.0005))

        enc_trainer_model.summary()
        plot_model(enc_trainer_model, to_file='enc_trainer_model.png')
        return enc_trainer_model

    def train_encoder(self):
        epochs = 100
        random_batch_size = 25
        hard_batch_size = 75

        losses = []

        enc_trainer_model = self.compile_trainer_model()

        for e in range(1, epochs + 1):

            mini_batch = self.get_batch(random_batch_size, hard_batch_size)
            loss = enc_trainer_model.train_on_batch(self.normalize_triplet_batch(mini_batch), None)
            losses.append(loss)

            if e % 5 == 0:
                print("Triplet Loss after " + str(e) + ' epochs : ' + str(loss))

        # Plot Triplet Loss over training period
        e = list(range(1, epochs + 1))

        plt.plot(e, losses)
        plt.xlabel('Epochs')
        plt.ylabel('Triplet Loss')
        plt.show()

    def validate_test_batch(self):
        # Generate random test batch
        test_batch = self.get_batch(128, 0)
        # Visualize Triplets with positive and negative distances

        index = 0

        anchor = test_batch[0][index]
        positive = test_batch[1][index]
        negative = test_batch[2][index]

        plt.figure(figsize=(12, 12))

        plt.subplot(1, 3, 1)
        plt.imshow(anchor)
        plt.title('ANCHOR')
        plt.subplot(1, 3, 2)
        plt.imshow(positive)
        plt.title('POSITIVE')
        plt.subplot(1, 3, 3)
        plt.imshow(negative)
        plt.title('NEGATIVE')

        plt.show()

        anchor_enc = self.enc_model.predict(self.normalize_single(anchor).reshape(1, 160, 160, 3))
        positive_enc = self.enc_model.predict(self.normalize_single(positive).reshape(1, 160, 160, 3))
        negative_enc = self.enc_model.predict(self.normalize_single(negative).reshape(1, 160, 160, 3))

        print("Distance between Anchor and Positive : " + str(self.distance(anchor_enc, positive_enc)))
        print("Distance between Anchor and Negative : " + str(self.distance(anchor_enc, negative_enc)))

    def save_weights(self):
        save_location = "Models/enc_model_weights.h5"
        self.enc_model.save_weights(save_location)


class TripletLossLayer(Layer):

    def __init__(self, margin, **kwargs):
        self.margin = margin
        super(TripletLossLayer, self).__init__(kwargs)

    def triplet_loss(self, inputs):
        anchor, positive, negative = inputs

        anchor = anchor / K.sqrt(K.maximum(K.sum(K.square(anchor), axis=1, keepdims=True), 1e-10))
        positive = positive / K.sqrt(K.maximum(K.sum(K.square(positive), axis=1, keepdims=True), 1e-10))
        negative = negative / K.sqrt(K.maximum(K.sum(K.square(negative), axis=1, keepdims=True), 1e-10))

        p_dist = K.sqrt(K.sum(K.square(anchor - positive), axis=1))
        n_dist = K.sqrt(K.sum(K.square(anchor - negative), axis=1))

        return K.sum(K.maximum(p_dist - n_dist + self.margin, 0))

    def call(self, inputs):
        """
        call function to
        :param inputs:
        :return:
        """
        loss = self.triplet_loss(inputs)
        self.add_loss(loss)
        return loss


if __name__ == '__main__':
    encoder = TripletLossEncoder()
