FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY .eslintrc.cjs /app/.eslintrc.cjs
COPY .prettierrc.json /app/.prettierrc.json
COPY index.html /app/index.html
COPY vite.config.js /app/vite.config.js
COPY vitest.config.js /app/vitest.config.js

COPY src ./src

CMD ["npm","run","standalone"] 
