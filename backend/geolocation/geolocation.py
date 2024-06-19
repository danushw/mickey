import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient, errors
from bson import ObjectId

app = Flask(__name__)
CORS(app)
print("Starting geolocation rest api")
load_dotenv()

try:
    MONGODB_URI = os.environ['MONGODB_URI']
    client = MongoClient(MONGODB_URI)
    geolocation_db = client.geolocation
except errors.ConnectionFailure as e:
    print(f"Could not connect to MongoDB: {e}")
    exit(1)

def insert_doc_db(id, lat, lng):
    try:
        collection = geolocation_db.geolocation
        new_document = {
            "mickey_id": ObjectId(id),
            "lat": lat,
            "lng": lng
        }
        inserted_id = collection.insert_one(new_document).inserted_id
        return str(inserted_id)
    except errors.PyMongoError as e:
        print(f"An error occurred while inserting document: {e}")
        return None

def check_id_mickey_db(id):
    try:
        collection = client.mickeys.mickeys
        return collection.count_documents({"_id": ObjectId(id)})
    except errors.PyMongoError as e:
        print(f"An error occurred while checking document: {e}")
        return 0

@app.route("/api/geolocation/", methods=["POST"])
def add_geolocation():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Missing data in request body"}), 400

        mickey_id = data.get("mickey_id")
        lat = data.get("lat")
        lng = data.get("lng")

        if not mickey_id or not lat or not lng:
            return jsonify({"error": "Missing id or lat or lng in request body"}), 400

        if not ObjectId.is_valid(mickey_id):
            return jsonify({"error": "Invalid mickey_id format"}), 400

        # Check if _id exists in mickeys db    
        document_count = check_id_mickey_db(mickey_id)
        if document_count > 0:
            print(f"The collection contains the ID: {mickey_id}")
        else:
            print(f"The collection does not contain the ID: {mickey_id}")
            return jsonify({"error": "mickey_id does not exist"}), 400

        # Check if this mickey already has a geolocation, if it does- override it
        new_geolocation = insert_doc_db(mickey_id, lat, lng)
        if new_geolocation is None:
            return jsonify({"error": "Failed to add geolocation"}), 500

        return jsonify({"message": "Geolocation added successfully!", "id": new_geolocation}), 201
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An unexpected error occurred"}), 500

@app.route("/api/geolocation/<string:id>", methods=["GET"])
def get_geolocation(id):
    try:
        if not ObjectId.is_valid(id):
            return jsonify({"error": "Invalid mickey_id format"}), 400

        collection = geolocation_db.geolocation
        geolocation = collection.find_one({"mickey_id": ObjectId(id)})

        if not geolocation:
            return jsonify({"error": "Geolocation not found"}), 404

        geolocation['_id'] = str(geolocation['_id'])
        geolocation['mickey_id'] = str(geolocation['mickey_id'])

        return jsonify(geolocation), 200
    except errors.PyMongoError as e:
        print(f"An error occurred while retrieving document: {e}")
        return jsonify({"error": "An unexpected error occurred"}), 500
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An unexpected error occurred"}), 500

if __name__ == '__main__':
    try:
        app.run(host='localhost', port=5002, debug=True)
    except Exception as e:
        print(f"An error occurred while starting the server: {e}")
