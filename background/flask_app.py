from flask import Flask, request
import urllib.request, json, base64, sys, time, os, shutil, sqlite3, socket

app = Flask(__name__)

#  CORS (Cross-Origin Resource Sharing)対策
from flask_cors import CORS
CORS(app)

@app.route('/get_click', methods=['GET'])
def get_click():
    print('get_click')
    return {'data': 'Hello, Flask World! get_click'}

@app.route('/post_click', methods=['POST'])
def post_click():
    print('post_click')
    request_json = json.loads(request.data.decode())
    print(request_json)
    return {'data': 'Hello, Flask World! post_click'}

@app.route('/', methods=['GET', 'POST'])
def post_root():
    return {'data': 'Hello, Flask World! Loading'}

if __name__ == "__main__":
    app.run(debug=True)
