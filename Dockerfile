FROM node:12.13

ARG ENVIRONMENT
ARG UI_PORT

WORKDIR /usr/source/app

COPY package*.json ./

ENV NODE_ENV $ENVIRONMENT

RUN npm ci

EXPOSE $UI_PORT

CMD ["npm", "run", "develop"]
