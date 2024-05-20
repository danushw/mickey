
import os
import datetime
from dotenv import load_dotenv
from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_cors import CORS
from bson import ObjectId

print("starting mickey backend...")
load_dotenv()
MONGODB_URI = os.environ['MONGODB_URI']

client = MongoClient(MONGODB_URI)
dbs = client.list_database_names();
mickeys_db = client.mickeys
collections = mickeys_db.list_collection_names();
#print(collections)

app = Flask(__name__)
CORS(app)

def insert_doc_db(name, description, date, lat, lng):
    collection = mickeys_db.mickeys
    new_document = {
        "name" : name,
        "description" : description,
        "date": datetime.datetime.strptime(date, '%Y-%m-%d'),
        "geolocation": {
            "lat": lat,
            "lng": lng
        }
    }
    inserted_id = collection.insert_one(new_document).inserted_id
    print(inserted_id)
    return str(inserted_id)

def get_all_mickeys_db():
    mickeys = mickeys_db.mickeys.find()
    mickeys_list = []

    for mickey in mickeys:
        mickey['_id'] = str(mickey['_id'])
        mickeys_list.append(mickey)

    return mickeys_list

def delete_mickey_by_id_db(id):
    print(ObjectId(id))

    result = mickeys_db.mickey.delete_one({'_id': ObjectId(id)})
    print("Count=")
    print(result.deleted_count)
    if result.deleted_count == 1:
        return True
    else:
        return False


@app.route("/api/mickeys/", methods=["GET"])
def get_all_mickeys():
    mickeys = get_all_mickeys_db()
    if not mickeys:
         return jsonify({"message": "No Mickey Mouse entries found"}), 204
    return jsonify(mickeys)

@app.route("/api/mickeys/", methods=["POST"])
def create_mickey_mouse():
    
    data = request.get_json()  
    if not data:
        return jsonify({"error": "Missing data in request body"}), 400

    name = data.get("name")
    desc = data.get("description")
    date = data.get("date")
    geolocation = data.get("geolocation")
    
    if not geolocation:
        return jsonify({"error": "Missing geolocation in request body"}), 400

    lat = geolocation.get("lat")
    lng = geolocation.get("lng")

    if not name or not desc or not date:
        return jsonify({"error": "Missing name or age or date in request body"}), 400

    inserted_id = insert_doc_db(name, desc, date, lat, lng)
  
    return jsonify({"message": "Mickey Mouse created successfully!", "id": inserted_id}), 201

@app.route("/api/mickeys/<string:id>", methods=["DELETE"])
def delete_mickey(id):
 
    if delete_mickey_by_id_db(id):
        return jsonify({"message": f"Mickey Mouse with ID {id} deleted successfully"}), 200
    else:
        return jsonify({"error": f"Mickey Mouse with ID {id} not found"}), 404
    
if __name__ == "__main__":
    app.run(debug=True)