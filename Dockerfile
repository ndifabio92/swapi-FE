FROM --platform=$BUILDPLATFORM node:18.16-alpine3.17

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY public /app

RUN npm run build

EXPOSE 5173

CMD ["npm","start"]