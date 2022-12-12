from python:3.8-alpine
workdir /usr/app
copy . .
run pip install --upgrade pip
run pip install -r requirements.txt
ENV message_board_host database
ENV message_board_port 5432
ENV message_board_user comp_user
ENV message_board_password password
ENV message_board_database message_board
expose 8000 5000
cmd ["python","app.py"]
