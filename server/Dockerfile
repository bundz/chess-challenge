FROM node:13.10
WORKDIR /srv/app

RUN cd /srv
COPY ./package.json /srv
COPY ./package-lock.json /srv
RUN npm install
RUN npm install -g nodemon
RUN cd /srv/app

ENTRYPOINT [ "npm", "start" ]