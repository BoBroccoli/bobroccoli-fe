FROM node:11

WORKDIR /ui

COPY package.json ./

RUN npm install node-sass

RUN npm install

COPY . /ui

EXPOSE 3000

CMD npm start

#docker build -t bobroccoli-fe:1.0 .
#docker run -p 80:3000 bobroccoli-fe:1.0