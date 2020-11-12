import os
from nn_manager.face_recognition import FaceRecognition


if __name__ == '__main__':
    import sys
    training_path = str(sys.argv[1])
    testing_path = str(sys.argv[2])

    model_name = "face_recognition.h5"
    image_path = 'cita_test.jpg'
    face_recognition = FaceRecognition(training_path, testing_path)
    face_recognition.training()
    face_recognition.save_model(model_name)
    model = FaceRecognition.load_saved_model(os.path.join("model", model_name))
    k = FaceRecognition.model_prediction(image_path, os.path.join("model", model_name),
                                         os.path.join("model", "face_recognition_class_names.npy"))
    print(f"detected class is {k}")
