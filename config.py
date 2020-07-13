import os
from os.path import join, dirname, abspath
import connexion
from dotenv import load_dotenv

ROOT_DIR = abspath(dirname(__file__))
dotenv_path = join(ROOT_DIR, '.env')
load_dotenv(dotenv_path)

MYSQL_HOST = os.getenv('MYSQL_HOST', '127.0.0.1')
MYSQL_PORT = os.getenv('MYSQL_PORT', 3306)
MYSQL_USERNAME = os.getenv('MYSQL_USERNAME', 'root')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
MYSQL_DATABASE = os.getenv('MYSQL_DATABASE', 'presensi_karyawan')

FLASK_APP = os.getenv('FLASK_APP', 'server_two.app')
SERVER_IP = os.getenv('SERVER_IP', '127.0.0.1')
WEB_PORT = os.getenv('WEB_PORT', 8080)

ZMQ_GATEWAY_HOST = os.getenv('ZMQ_GATEWAY_HOST', '127.0.0.1')
ZMQ_GATEWAY_SUB_PORT = os.getenv('ZMQ_GATEWAY_SUB_PORT', 5005)
ZMQ_GATEWAY_RES_PORT = os.getenv('ZMQ_GATEWAY_RES_PORT', 5555)

DATASET_TRAINING_PATH = join(ROOT_DIR, os.getenv('DATASET_TRAINING_PATH', 'dataset/training'))
DATASET_TESTING_PATH = join(ROOT_DIR, os.getenv('DATASET_TESTING_PATH', 'dataset/testing'))

app = connexion.App(__name__, specification_dir='./swagger')

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{}:{}@{}:{}/{}'.format(MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST,
                                                                  MYSQL_PORT, MYSQL_DATABASE)

app.app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.add_api('swagger.yml')
