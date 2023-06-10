FROM --platform=$BUILDPLATFORM node:18.16-alpine3.17

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]