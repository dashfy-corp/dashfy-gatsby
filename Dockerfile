FROM node:12.13

WORKDIR /usr/source/app

COPY package*.json ./

RUN npm i

EXPOSE 8383

CMD ["npm", "run", "develop"]
