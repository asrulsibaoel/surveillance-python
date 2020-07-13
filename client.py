# USAGE
# python client.py --server-ip SERVER_IP

# import the necessary packages
from imutils.video import VideoStream
import imagezmq
import argparse
import socket
import time
from os import getenv

from dotenv import load_dotenv

load_dotenv()

server_ip = getenv("SERVER_IP", "35.236.137.50")
print("-=[Sending frame data to {}]=-".format(server_ip))

# initialize the ImageSender object with the socket address of the
# server
sender = imagezmq.ImageSender(connect_to="tcp://{}:5555".format(
    server_ip))

# get the host name, initialize the video stream, and allow the
# camera sensor to warmup
rpiName = socket.gethostname()
# vs = VideoStream(usePiCamera=True).start()
vs = VideoStream(src=0).start()
time.sleep(2.0)

while True:
    # read the frame from the camera and send it to the server
    frame = vs.read()
    sender.send_image("camera~{}".format(rpiName), frame)
