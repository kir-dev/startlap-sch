FROM node:18-alpine

RUN apk update && apk upgrade && apk add bash

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn workspace backend build

CMD  ["node", "packages/backend/dist/main"]
