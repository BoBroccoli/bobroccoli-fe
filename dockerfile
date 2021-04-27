FROM node:12

WORKDIR /ui

COPY package.json ./

RUN npm install

COPY . /ui

EXPOSE 3000

CMD npm start