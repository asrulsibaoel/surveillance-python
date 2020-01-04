# -*- coding: utf-8 -*-
# USAGE
# python server.py --prototxt MobileNetSSD_deploy.prototxt --model MobileNetSSD_deploy.caffemodel --montageW 2 --montageH 2


# import the necessary packages
from imutils import build_montages
from datetime import datetime
import numpy as np
import imagezmq
import time
# import argparse
import imutils
import cv2
from flask import Flask, render_template, Response

app = Flask(__name__)
sub = cv2.createBackgroundSubtractorMOG2()  # create background subtractor


imageHub = imagezmq.ImageHub()


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


def gen():
    """Video streaming generator function."""
    # Read until video is completed
    while True:
        (rpiName, img) = imageHub.recv_image() # Capture frame by frame
        imageHub.send_reply(b'OK suwun')
        image = cv2.resize(img,(0,0),fx=0.5,fy=0.5)
        frame = cv2.imencode('.jpg', image)[1].tobytes()
        yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        time.sleep(0.1)
		# else:
    cv2.destroyAllWindows()


@app.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')