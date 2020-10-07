FROM node:12.18.3-alpine

RUN mkdir /ui-repo
COPY . /ui-repo
WORKDIR /ui-repo

RUN yarn install