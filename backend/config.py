import os

from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"), override=False)
MESSAGE_CREDS = {
    x: os.getenv(f"message_board_{x}")
    for x in "user password database host port".split()
}

if __name__ == "__main__":
    print(MESSAGE_CREDS)
