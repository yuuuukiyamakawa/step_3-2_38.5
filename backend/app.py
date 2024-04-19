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

# @app.route('/login', methods=['POST'])
# def login():

@app.route("/mapping", methods=['GET'])
def mapping():
    model = [
        dbmodels.User,
        dbmodels.Login_status,
        dbmodels.Occupation_attributes,
        dbmodels.Occupation_attributes_image,
        dbmodels.User_grid,
        dbmodels.Island_grid
        ]
    result = crud.select_mapping(model)
    return result, 200

@app.route("/user_profile", methods=['GET'])
def show_user_profile():
    model = [
        dbmodels.User,
        dbmodels.Details,
        dbmodels.Sex,
        dbmodels.Living_place,
        dbmodels.Birth_place,
        dbmodels.Spend_time,
        dbmodels.By_when
        ]
    result = crud.select_profile(model)
    return result, 200
