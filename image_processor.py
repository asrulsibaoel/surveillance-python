from imagezmq import ImageHub, ImageSender
import os
import cv2
import time

from dotenv import load_dotenv
from nn_manager.face_recognition import FaceRecognition
from nn_manager.face_detection import detect_face_from_buffer

load_dotenv()

ZMQ_GATEWAY_HOST = os.getenv("ZMQ_GATEWAY_HOST", "127.0.0.1")
ZMQ_GATEWAY_SUB_PORT = os.getenv("ZMQ_GATEWAY_SUB_PORT", "5005")
ZMQ_GATEWAY_RES_PORT = os.getenv("ZMQ_GATEWAY_RES_PORT", "5555")


class ImageProcessor(object):

    def __init__(self, zmq_server_address="127.0.0.1", zmq_sub_port="5005", zmq_res_port="5555"):
        zmq_sub_address = "tcp://{}:{}".format(str(zmq_server_address), str(zmq_sub_port))
        zmq_res_address = "tcp://{}:{}".format(str(zmq_server_address), str(zmq_res_port))
        self.image_hub = ImageHub(zmq_res_address, False)
        self.image_sender = ImageSender(zmq_sub_address)

    def get_image_stream(self):
        (key, img) = self.image_hub.recv_image()

        self.image_hub.send_reply()
        [key_type, rpi_name] = key.split("~")

        if key_type == "detect":
            image = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)
            frame = cv2.imencode('.jpg', image)[1].tobytes()
            [face_array, face, img] = detect_face_from_buffer(frame)
            print(face_array)
            self.image_sender.send_image("detected~{}".format(rpi_name), img)

    def process_image(self):
        # face_recognition = FaceRecognition()
        # model_name = "face_recognition.h5"
        while True:
            self.get_image_stream()
            # # k = FaceRecognition.model_prediction(img, os.path.join("model", model_name),
            # #                                      os.path.join("model", "face_recognition_class_names.npy"))
            time.sleep(0.1)


if __name__ == "__main__":
    processor = ImageProcessor(ZMQ_GATEWAY_HOST, ZMQ_GATEWAY_RES_PORT, ZMQ_GATEWAY_SUB_PORT)
    print("-=[Subscribing on Host: {}]=-".format(ZMQ_GATEWAY_HOST))
    processor.process_image()
