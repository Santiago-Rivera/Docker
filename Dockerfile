FROM node:18-alpine3.20

WORKDIR /app

COPY . /app

CMD [ "node", "server.js" ]