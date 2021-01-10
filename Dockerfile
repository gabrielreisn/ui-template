FROM node:14.15.0-alpine

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

CMD [ "yarn", "dev" ]