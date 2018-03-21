FROM node:8

RUN mkdir /work
WORKDIR /work

COPY package.json ./
COPY package-lock.json ./

RUN npm install
VOLUME /work/node_modules

COPY app ./app/
