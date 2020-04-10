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
import config

from zmq_gateway import ZmqGateway
import json
import config

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
sub = cv2.createBackgroundSubtractorMOG2()  # create background subtractor


zmq_server = ZmqGateway(publisher_port=config.ZMQ_GATEWAY_SUB_PORT, subscriber_port=config.ZMQ_GATEWAY_RES_PORT)
zmq_server.run_server()



@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('home.html')


def gen():
    """Video streaming generator function."""
    # Read until video is completed
    try:
        while True:
            zmq_server.get_frame()
            yield zmq_server.frame
            time.sleep(0.01)

        cv2.destroyAllWindows()
    except Exception as e:
        print(type(e), ": ", str(e))
    
@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    # return Response('kodok.png',
    #                 mimetype='multipart/x-mixed-replace; boundary=frame')
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(port=int(config.WEB_PORT), use_reloader=False, debug=True)