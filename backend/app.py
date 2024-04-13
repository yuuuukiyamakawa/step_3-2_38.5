from flask import Flask, request, jsonify
import json
from flask_cors import CORS
from db_control import crud, dbmodels
import requests

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "<p>Flask top page!</p>"

@app.route("/allusers", methods=['GET'])
def read_all_users():
    model = dbmodels.Users
    result = crud.selectAll(dbmodels.Users)
    return result, 200