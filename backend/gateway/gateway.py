import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

MICKEYS_URL = 'http://localhost:5001/api/mickeys/'
GEO_URL = 'http://localhost:5002/api/geolocation/'
app = Flask(__name__)
CORS(app)

print("Starting gateway server")

@app.route("/public/mickeys/", methods=["GET"])
def get_all_mickeys():
    try:
     
        res_mickeys = requests.get(MICKEYS_URL)
        if res_mickeys.status_code != 200:
            return jsonify({'error': res_mickeys.json().get('message', 'Unknown error')}), res_mickeys.status_code

        mickeys = res_mickeys.json()

        combined_data = []
        for mickey in mickeys:
            mickey_id = mickey['_id']
            res_geo = requests.get(f"{GEO_URL}{mickey_id}")

            if res_geo.status_code == 200:
                geolocation = res_geo.json()
                mickey['lat'] = geolocation.get('lat')
                mickey['lng'] = geolocation.get('lng')
            else:
                mickey['lat'] = None
                mickey['lng'] = None

            combined_data.append(mickey)

        return jsonify(combined_data), 200

    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': 'Failed to fetch data from the services.'}), 500


if __name__ == "__main__":
    app.run(host='localhost', port=8000, debug=True)