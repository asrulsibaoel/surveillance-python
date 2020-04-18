import cv2

class CnnManager(object):

    def __init__(self):
        super().__init__()

    def detect_faces(self, img):
        self.face = ""