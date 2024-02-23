from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/python")
def hello_world():
    return jsonify({"message": "Hello from the Python API!"})
