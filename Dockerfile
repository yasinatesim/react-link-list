FROM node:12

WORKDIR /usr/app

COPY ./package.json /usr/app
COPY ./yarn.lock /usr/app

RUN yarn install

COPY . /usr/app

EXPOSE 3000

CMD ["yarn", "start"]
