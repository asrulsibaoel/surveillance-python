import os
from nn_manager import FaceRecognition
from config import DATASET_TRAINING_PATH, DATASET_TESTING_PATH

if __name__ == '__main__':
    model_name = "face_recognition.h5"
    image_path = 'test.jpg'
    face_recognition = FaceRecognition(DATASET_TRAINING_PATH, DATASET_TESTING_PATH)
    face_recognition.training()
    face_recognition.save_model(model_name)
    model = FaceRecognition.load_saved_model(os.path.join("nn_manager", "model", model_name))
    k = FaceRecognition.model_prediction(image_path, os.path.join("nn_manager", "model", model_name),
                                         os.path.join("nn_manager", "model", "face_recognition_class_names.npy"))
    print(f"detected class is {k}")
