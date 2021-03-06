from imagezmq import ImageSender, ImageHub
import cv2


class ZmqGateway(object):

    def __init__(self, publisher_port="5005", subscriber_port="5555"):
        self.publisher_port = publisher_port
        self.subscriber_port = subscriber_port
        self.frame = b''

    def run_server(self):
        """Initiate the server."""
        publisher_uri = "tcp://*:{}".format(self.publisher_port)
        subscriber_uri = "tcp://*:{}".format(self.subscriber_port)
        self.publisher = ImageSender(publisher_uri, REQ_REP=False)
        print(" * Running ZMQ Publisher on port {}".format(self.publisher_port))
        self.subscriber = ImageHub(subscriber_uri, REQ_REP=True)
        print(" * Running ZMQ Subscriber on port {}".format(self.subscriber_port))

    def get_frame(self):
        """Get frame from camera and send it to Neural Network Service"""
        (key, img) = self.subscriber.recv_image()
        self.subscriber.send_reply()

        [key_type, rpi_name] = key.split("~")

        if key_type == "camera":
            decoded_image = cv2.imdecode(img, 1)
            self.publisher.send_image_pubsub("detect~{}".format(rpi_name), decoded_image)
        elif key_type == "detected":
            image = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)
            frame = cv2.imencode('.jpg', image)[1].tobytes()

            self.frame = (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            # print(self.frame)
        else:
            raise Exception("Key type and/ or payload must be right defined.")
