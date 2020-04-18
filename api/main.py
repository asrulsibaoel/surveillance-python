from flask import Response, render_template

import cv2
import time

from models.user_model import *
from models.location_model import *

def create_db():
    db.drop_all()
    db.create_all()
    User.add_user_td()
    Location.add_location_td()
    response_text = '{ "message": "Database created." }'
    response = Response(response_text, 200, mimetype='application/json')
    return response

def welcome():
    """Video streaming home page."""
    return render_template('views/home.html')

def health():
    response_text = '{ "status": "OK" }'
    response = Response(response_text, 200, mimetype='application/json')
    return response
