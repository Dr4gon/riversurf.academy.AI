FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY src ./src
COPY .env ./

CMD ["npm","run","standalone"]
