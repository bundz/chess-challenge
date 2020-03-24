FROM node:13.10
WORKDIR /app

COPY . /app
RUN npm install
RUN npm install -g nodemon

ENTRYPOINT [ "npm", "start" ]
