from os.path import join, exists
from os import mkdir, listdir
import glob

from mtcnn import MTCNN
from PIL import Image
import numpy as np
import cv2


def save_cropped_face(images_root_folder,
                      required_size=(224, 224),
                      cropped_folder: str = 'dataset',
                      testing_folder: str = 'testing',
                      testing_files_count: int = 3):
    if not exists(images_root_folder):
        return Exception("Input Images folder is not exist.")
    file_types = ["*.png", "*.PNG", "*.JPEG", "*.jpeg", "*.jpg", "*.JPG"]
    people = listdir(images_root_folder)

    for file_type in file_types:
        for person in people:
            for i, image_file in enumerate(
                    glob.glob(join(images_root_folder, person, file_type))):

                print(f"processing {image_file}")
                img = cv2.imread(image_file)
                detector = MTCNN()
                results = detector.detect_faces(img)
                if not results:
                    continue

                x, y, width, height = results[0]['box']
                face = img[y:y + height, x:x + width]
                try:
                    image = Image.fromarray(face)
                except ValueError:
                    continue
                image = image.resize(required_size)
                face_array = np.asarray(image)

                if not exists(cropped_folder):
                    mkdir(cropped_folder)

                if not exists(testing_folder):
                    mkdir(testing_folder)

                if not exists(join(cropped_folder, person)):
                    mkdir(join(cropped_folder, person))

                if not exists(join(testing_folder, person)):
                    mkdir(join(testing_folder, person))

                output_file_name = f"{person}_{i}{image_file[-4:]}"

                # Separate training and testing
                if i < testing_files_count:
                    folder = testing_folder
                else:
                    folder = cropped_folder
                cv2.imwrite(
                    join(folder, person, output_file_name),
                    face_array)


def get_detected_face(filename, required_size=(224, 224)):
    img = cv2.imread(filename)
    detector = MTCNN()
    results = detector.detect_faces(img)
    x, y, width, height = results[0]['box']
    face = img[y:y + height, x:x + width]
    image = Image.fromarray(face)
    image = image.resize(required_size)
    face_array = np.asarray(image)
    return face_array, face, img


if __name__ == "__main__":  # create train ready dataset
    save_cropped_face(
        images_root_folder='/Users/asrulsaniariesandy/Downloads/drive/',
        cropped_folder='dataset/training_me',
        testing_folder='dataset/testing_me',
        testing_files_count=5
    )
