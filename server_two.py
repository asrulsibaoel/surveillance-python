# -*- coding: utf-8 -*-
import time
import cv2
from flask import Flask, render_template, Response

from zmq_gateway import ZmqGateway

import config
from config import app

sub = cv2.createBackgroundSubtractorMOG2()  # create background subtractor

csap = app.app

zmq_server = ZmqGateway(publisher_port=config.ZMQ_GATEWAY_SUB_PORT, subscriber_port=config.ZMQ_GATEWAY_RES_PORT)
zmq_server.run_server()


@csap.errorhandler(404)
def not_found(e):
    return render_template("404.html")


@csap.errorhandler(505)
def something_wrong(e):
    return render_template("505.html")


@csap.route('/')
def index():
    """Video streaming home page."""
    return render_template('views/home.html')


def gen():
    """Video streaming generator function."""
    # Read until video is completed
    try:
        while True:
            zmq_server.get_frame()
            yield zmq_server.frame
            time.sleep(0.1)

        cv2.destroyAllWindows()
    except Exception as e:
        print(type(e), ": ", str(e))


@csap.route('/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    csap.run(host='0.0.0.0', port=int(config.WEB_PORT), use_reloader=False, debug=True)
