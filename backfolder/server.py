from flask import Flask, request, jsonify # pyright: ignore[reportMissingImports]

from flask_cors import CORS  # optional if frontend is served from another origin

app = Flask(__name__)
CORS(app)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    return jsonify({"message": f"Received submission from {name} ({email})"}), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
