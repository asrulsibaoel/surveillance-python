from imagezmq import ImageHub, ImageSender
import os
import cv2
import time

from dotenv import load_dotenv
load_dotenv()

ZMQ_GATEWAY_HOST = os.getenv("ZMQ_GATEWAY_HOST", "127.0.0.1")
ZMQ_GATEWAY_SUB_PORT = os.getenv("ZMQ_GATEWAY_SUB_PORT", "5005")
ZMQ_GATEWAY_RES_PORT = os.getenv("ZMQ_GATEWAY_RES_PORT", "5555")

class ImageProcessor(object):

    def __init__(self, zmq_server_address = "127.0.0.1", zmq_sub_port = "5005", zmq_res_port = "5555"):
        
        zmq_sub_address = "tcp://{}:{}".format(str(zmq_server_address), str(zmq_sub_port))
        zmq_res_address = "tcp://{}:{}".format(str(zmq_server_address), str(zmq_res_port))
        self.image_hub = ImageHub(zmq_res_address, False)
        self.image_sender = ImageSender(zmq_sub_address)

    def detect_faces(self, frame):
        
        return frame

    def get_image_stream(self):
        yield self.image_hub.recv_image()


        # [key, img] = self.image_hub.recv_image()
        # [key_type, rpi_name] = key.split("~")

        # if key_type == "detected":
        #     yield img
        #     # image = cv2.resize(img,(0,0),fx=0.5,fy=0.5)
        #     # frame = cv2.imencode('.jpg', image)[1].tobytes()
        # return

    def process_image(self):
        while True:
            (key, img) = self.image_hub.recv_image()
            # self.image_hub.send_reply()
            # print(key, ": ", img)
            [key_type, rpi_name] = key.split("~")

            self.image_sender.send_image("detected~{}".format(rpi_name), img)

            time.sleep(0.01)


if __name__ == "__main__":
    processor = ImageProcessor(ZMQ_GATEWAY_HOST, ZMQ_GATEWAY_RES_PORT, ZMQ_GATEWAY_SUB_PORT)
    print("-=[Subscribing on Host: {}]=-".format(ZMQ_GATEWAY_HOST))
    processor.process_image()