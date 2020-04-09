import numpy as np
import os
import sys
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential,Model
from tensorflow.keras.layers import ZeroPadding2D,Convolution2D,MaxPooling2D
from tensorflow.keras.layers import Dense,Dropout,Softmax,Flatten,Activation,BatchNormalization
from tensorflow.keras.preprocessing.image import load_img,img_to_array
from tensorflow.keras.applications.imagenet_utils import preprocess_input
import tensorflow.keras.backend as K

class VggModel(object):

    def __init__(self, path = os.path.dirname(sys.modules['__mail__'].__file__)):
        self.path = path
        self.person_folders = os.listdir(os.path.join(self.path, 'images_crop/'))
        self.test_person_folders = os.listdir(os.path.join(self.path, 'images_crop/'))
        self.person_rep = dict()
        self.x_train = []
        self.y_train = []
        self.x_test = []
        self.y_test = []

    def define_model(self, weight_model_file = 'vgg_face_weights.h5'):
        """Define VGG_FACE_MODEL architecture"""

        self.model = Sequential()
        self.model.add(ZeroPadding2D((1,1),input_shape=(224,224, 3)))
        self.model.add(Convolution2D(64, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(64, (3, 3), activation='relu'))
        self.model.add(MaxPooling2D((2,2), strides=(2,2)))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(128, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(128, (3, 3), activation='relu'))
        self.model.add(MaxPooling2D((2,2), strides=(2,2)))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(256, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(256, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(256, (3, 3), activation='relu'))
        self.model.add(MaxPooling2D((2,2), strides=(2,2)))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(512, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(512, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(512, (3, 3), activation='relu'))
        self.model.add(MaxPooling2D((2,2), strides=(2,2)))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(512, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(512, (3, 3), activation='relu'))
        self.model.add(ZeroPadding2D((1,1)))
        self.model.add(Convolution2D(512, (3, 3), activation='relu'))
        self.model.add(MaxPooling2D((2,2), strides=(2,2)))
        self.model.add(Convolution2D(4096, (7, 7), activation='relu'))
        self.model.add(Dropout(0.5))
        self.model.add(Convolution2D(4096, (1, 1), activation='relu'))
        self.model.add(Dropout(0.5))
        self.model.add(Convolution2D(2622, (1, 1)))
        self.model.add(Flatten())
        self.model.add(Activation('softmax'))

        #Load weights
        self.model.load_weights(weight_model_file)
        self.vgg_face = Model(inputs= self.model.layers[0].input, outputs= self.model.layers[-2].output)

        print(self.model.summary())

    def prepare_training_data(self):
        """Prepare the trainning data"""
        
        for (i, person) in enumerate(self.person_folders):
            self.person_rep[i] = person
            image_crop_dir = 'images_crop/{}/'. format(person)
            image_names = os.listdir(image_crop_dir)
            for image_name in image_names:
                img = load_img(os.path.join(self.path, image_crop_dir, image_name), target_size=(224, 224))
                img = img_to_array(img)
                img = np.expand_dims(img, axis = 0)
                img = preprocess_input(img)
                img_encode = vgg_face(img)
                self.x_train.append(np.squeeze(K.eval(img_encode)).tolist())
                self.y_train.append(i)
        
        self.x_train = np.array(x_train)
        self.y_train = np.array(y_train)

    def prepare_test_data(self):
        """Prepare the test data"""

        for i, person in enumerate(self.test_person_folders):
            image_names = os.listdir(os.path.join(self.path, self.test_person_folders, person))
            for image_name in image_names:
                img = load_img(os.path.join(image_names, image_name), target_size=(224, 224))
                img = img_to_array(img)
                img = np.expand_dims(img, axis = 0)
                img = preprocess_input(img)
                img_encode = self.vgg_face(img)
                self.x_test.append(np.squeeze(K.eval(img_encode)).tolist())
                self.y_test.append(i)

    def save_test_and_train(self):
        np.save('train_data', self.self.x_train)
        np.save('train_labels', self.y_train)
        np.save('test_data', self.x_test)
        np.save('test_labels', self.y_test)

    def load_saved_test_and_train(self):
        self.x_train=np.load('train_data.npy')
        self.y_train=np.load('train_labels.npy')
        self.x_test=np.load('test_data.npy')
        self.y_test=np.load('test_labels.npy')

    def detect_faces(self, frame):
        while True:
            print("Detected face: ", frame)

            