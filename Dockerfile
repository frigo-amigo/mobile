FROM node:18 AS builder

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .
