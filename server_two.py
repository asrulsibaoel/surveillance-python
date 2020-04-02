# -*- coding: utf-8 -*-
# USAGE
# python server.py --prototxt MobileNetSSD_deploy.prototxt --model MobileNetSSD_deploy.caffemodel --montageW 2 --montageH 2


# import the necessary packages
# from imutils import build_montages
# from datetime import datetime
# import numpy as np
import imagezmq
import time
# import argparse
# import imutils
import cv2
from flask import Flask, render_template, Response
import os

from zmq_gateway import ZmqGateway
import json


from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
sub = cv2.createBackgroundSubtractorMOG2()  # create background subtractor


# APP_PORT = os.getenv('PORT', "5555")
# APP_URI = "tcp://*:{}".format(APP_PORT)
# imageHub = imagezmq.ImageHub(open_port=APP_URI)
# print("-=[Image Receiver Running on port: {}]=-".format(APP_PORT))


PUBLISHER_PORT = os.getenv("ZMQ_GATEWAY_SUB_PORT", "5005")
SUBSCRIBER_PORT = os.getenv("ZMQ_GATEWAY_RES_PORT", "5555")
zmq_server = ZmqGateway(publisher_port= PUBLISHER_PORT, subscriber_port=SUBSCRIBER_PORT)
zmq_server.run_server()



@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


def gen():
    """Video streaming generator function."""
    # Read until video is completed
    while True:
        # (rpiName, img) = imageHub.recv_image() # Capture frame by frame
        # imageHub.send_reply(b'OK suwun')

        # [key_type, rpi_name] = rpiName.split("~")

        # if key_type == "camera":
        #     zmq_server.publisher.send_image_pubsub("detect~{}".format(rpi_name), img)
        # elif key_type == "detected":
        #     image = cv2.resize(img,(0,0),fx=0.5,fy=0.5)
        #     frame = cv2.imencode('.jpg', image)[1].tobytes()
        #     yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        # else:
        #     raise Exception("Key type and/ or payload must be right defined.")
        
        zmq_server.get_frame()
        yield zmq_server.frame

        # image = cv2.resize(img,(0,0),fx=0.5,fy=0.5)
        # frame = cv2.imencode('.jpg', image)[1].tobytes()
        # yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        time.sleep(0.1)
		# else:
    cv2.destroyAllWindows()


@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    WEB_PORT = os.getenv("WEB_PORT", 8080)
    app.run(port=int(WEB_PORT))