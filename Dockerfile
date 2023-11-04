FROM node:20-slim

WORKDIR /app
COPY package.json /app
COPY pnpm-lock.yaml /app

RUN pnpm install

COPY . /app

CMD [ "pnpm", "dev" ]