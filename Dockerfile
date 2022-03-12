FROM node:14-alpine AS base

WORKDIR /app

FROM base AS dependencies

# We only copy the dependencies we need
COPY app1 app1
COPY app2 app2

COPY shell shell

# The global package.json only contains build dependencies
COPY package.json .

COPY yarn.lock .

RUN yarn add concurrently

RUN yarn install

CMD ["yarn", "start"]