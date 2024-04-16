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

@app.route("/mapping", methods=['GET'])
def read_all_users():
    model = [
        dbmodels.User,
        dbmodels.Occupation,
        dbmodels.User_grid,
        dbmodels.Island_grid,
        ]
    result = crud.select_for_mapping(model)
    return result, 200

# @app.route('/login', methods=['POST'])
# def login():
