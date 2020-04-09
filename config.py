import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

ROOT_DIR = os.path.abspath(os.curdir)
MYSQL_HOST = os.getenv('MYSQL_HOST', '127.0.0.1')
MYSQL_PORT = os.getenv('MYSQL_PORT', 3306)
MYSQL_USERNAME = os.getenv('MYSQL_USERNAME', 'root')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
MYSQL_DATABASE = os.getenv('MYSQL_DATABASE', 'presensi_karyawan')

FLASK_APP = os.getenv('FLASK_APP', 'server_two.app')
SERVER_IP = os.getenv('SERVER_IP', '127.0.0.1')
WEB_PORT = os.getenv('WEB_PORT', 8080)

ZMQ_GATEWAY_HOST=os.getenv('ZMQ_GATEWAY_HOST', '127.0.0.1')
ZMQ_GATEWAY_SUB_PORT=os.getenv('ZMQ_GATEWAY_SUB_PORT', 5005)
ZMQ_GATEWAY_RES_PORT=os.getenv('ZMQ_GATEWAY_RES_PORT', 5555)

