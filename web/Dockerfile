# CodeRev Front End Service (VueJS)
FROM node:9-alpine

MAINTAINER Tom Lavenziano <tomlavenziano@epochzero.com>

WORKDIR /var/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
