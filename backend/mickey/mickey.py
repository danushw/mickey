import os
import datetime
import requests

from dotenv import load_dotenv
from pymongo import MongoClient, errors
from flask import Flask, request, jsonify
from flask_cors import CORS
from bson import ObjectId

print("starting mickey backend...")
load_dotenv()

MONGODB_URI = os.environ['MONGODB_URI']
GEO_URL = 'http://localhost:5002/api/geolocation/'

try:
    client = MongoClient(MONGODB_URI)
    dbs = client.list_database_names()
    mickeys_db = client.mickeys
    collections = mickeys_db.list_collection_names()
except errors.ConnectionFailure as e:
    print(f"Could not connect to MongoDB: {e}")
    exit(1)

app = Flask(__name__)
CORS(app)

def insert_doc_db(name, description, date):
    try:
        collection = mickeys_db.mickeys
        new_document = {
            "name": name,
            "description": description,
            "date": datetime.datetime.strptime(date, '%Y-%m-%d'),
        }
        inserted_id = collection.insert_one(new_document).inserted_id
        print(inserted_id)
        return str(inserted_id)
    except errors.PyMongoError as e:
        print(f"An error occurred while inserting document: {e}")
        return None

def get_all_mickeys_db():
    try:
        mickeys = mickeys_db.mickeys.find()
        mickeys_list = []
        for mickey in mickeys:
            mickey['_id'] = str(mickey['_id'])
            mickeys_list.append(mickey)
        return mickeys_list
    except errors.PyMongoError as e:
        print(f"An error occurred while retrieving documents: {e}")
        return []

def delete_mickey_by_id_db(id):
    try:
        result = mickeys_db.mickeys.delete_one({'_id': ObjectId(id)})
        print(f"Count={result.deleted_count}")
        return result.deleted_count == 1
    except errors.PyMongoError as e:
        print(f"An error occurred while deleting document: {e}")
        return False

@app.route("/api/mickeys/", methods=["GET"])
def get_all_mickeys():
    mickeys = get_all_mickeys_db()
    if not mickeys:
        return jsonify({"message": "No Mickey Mouse entries found"}), 204

    combined_data = []
    for mickey in mickeys:
        mickey_id = mickey['_id']
        try:
            res_geo = requests.get(f"{GEO_URL}{mickey_id}")
            if res_geo.status_code == 200:
                geolocation = res_geo.json()
                mickey['lat'] = geolocation.get('lat')
                mickey['lng'] = geolocation.get('lng')
            else:
                mickey['lat'] = None
                mickey['lng'] = None
        except requests.exceptions.RequestException as e:
            print(f"An error occurred: {e}")
            mickey['lat'] = None
            mickey['lng'] = None
        combined_data.append(mickey)

    return jsonify(combined_data), 200

@app.route("/api/mickeys/", methods=["POST"])
def create_mickey_mouse():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Missing data in request body"}), 400

        name = data.get("name")
        desc = data.get("description")
        date = data.get("date")

        if not name or not desc or not date:
            return jsonify({"error": "Missing name, description, or date in request body"}), 400

        inserted_id = insert_doc_db(name, desc, date)
        if inserted_id is None:
            return jsonify({"error": "Failed to create Mickey Mouse"}), 500

        return jsonify({"message": "Mickey Mouse created successfully!", "id": inserted_id}), 201
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An unexpected error occurred"}), 500

@app.route("/api/mickeys/<string:id>", methods=["DELETE"])
def delete_mickey(id):
    try:
        if delete_mickey_by_id_db(id):
            return jsonify({"message": f"Mickey Mouse with ID {id} deleted successfully"}), 200
        else:
            return jsonify({"error": f"Mickey Mouse with ID {id} not found"}), 404
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An unexpected error occurred"}), 500

if __name__ == "__main__":
    try:
        app.run(host='localhost', port=5000, debug=True)
    except Exception as e:
        print(f"An error occurred while starting the server: {e}")