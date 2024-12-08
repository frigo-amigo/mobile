FROM node:18 AS builder

WORKDIR /app

RUN corepack enable

RUN corepack prepare yarn@4.5.0 --activate

COPY yarn.lock package.json ./

RUN yarn install

COPY . .
