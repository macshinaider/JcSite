FROM node:latest

WORKDIR /backend

COPY package.json .

RUN yarn

COPY . .

RUN yarn prisma generate

EXPOSE 3000

CMD [ "yarn", "dev" ]
