# USAGE
# python client.py --server-ip SERVER_IP

# import the necessary packages
# from imutils.video import VideoStream
import imutils
import cv2
import imagezmq
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
# vs = VideoStream(src=0, resolution=(320, 240)).start()
vs = cv2.VideoCapture(0)
vs.set(3, 320)
vs.set(4, 240)
time.sleep(2.0)

while vs.isOpened():
    # read the frame from the camera and send it to the server
    ret, frame = vs.read()
    result, encimg = cv2.imencode('.jpg', frame, [int(cv2.IMWRITE_JPEG_QUALITY), 30])

    sender.send_image("camera~{}".format(rpiName), encimg)
    time.sleep(0.02)

sender.close()
vs.release()
cv2.destroyAllWindows()
