# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL http://172.18.0.12:5000

# install app dependencies
# COPY ./package*.json ./
copy . .
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
# COPY . ./

# start app
expose 3000
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
# cmd tail -f /dev/null
# CMD npm start
