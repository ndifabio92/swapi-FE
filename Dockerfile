FROM --platform=$BUILDPLATFORM node:18.16-alpine3.17

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]