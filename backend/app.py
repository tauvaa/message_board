from flask import Flask, request
from flask_cors import CORS

from db_connector import insert_message, read_messages

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        print(request.data)
    print(request)

    return "hello world"


@app.route("/message_add", methods=["POST", "GET"])
def add_message():
    data = request.get_json()
    author = data["author"]
    message = data["message"]
    insert_message(message, author)
    return ""

@app.route("/retrieve_messages", methods=["GET"])
def get_messages():
    messages = read_messages(10)
    for m in messages:
        m["message_timestamp"] = m["message_timestamp"].isoformat()
    print(messages)
    return {"messages": messages}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
