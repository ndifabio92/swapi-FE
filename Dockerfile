FROM --platform=$BUILDPLATFORM node:18.16-alpine3.17

WORKDIR /app

COPY package.json /app/

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5173

CMD ["yarn","dev"]