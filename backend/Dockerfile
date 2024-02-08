FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD src ./src
ADD .env ./

CMD ["npm","run","standalone"]
