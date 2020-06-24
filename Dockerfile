FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run install-fe

RUN npm run build-fe

EXPOSE 3001

CMD [ "npm", "start" ]