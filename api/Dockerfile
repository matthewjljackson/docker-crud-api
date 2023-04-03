FROM node:19-alpine

WORKDIR /app

RUN npm i -g ts-node

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npx","ts-node", "app.ts"]