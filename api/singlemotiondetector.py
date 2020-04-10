# import the necessary packages
import numpy as np
import imutils
import cv2

class SingleMotionDetector:

    def __init__(self, accumWeight=0.5):
    def __init__(self, accumWeight=0.5):
        # store the accumulated weight factor
		self.accumWeight = accumWeight
 
		# initialize the background model
		self.bg = None

    def update(self, image):
        if self.bg is None:
            self.bg = image.copy().astype("float")
            return

        cv2.accumulateWeighted(image, self.bg, self.accumWeight)

    def detect(self, image, tVal = 25):
        # compute the absolute difference between the background model
		# and the image passed in, then threshold the delta image
        delta = cv2.absdiff(self.bg.astype("uint8"), image)
        thresh = cv2.threshold(delta, tVal, 255, cv2.THRESH_BINARY)[1]

        # perform a series of erosions and dilations to remove small
		# blobs
        thresh = cv2.erode(thresh, None, iterations=2)
        thresh = cv2.dilate(thresh, None, iterations=2)