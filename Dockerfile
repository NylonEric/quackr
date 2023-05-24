# syntax=docker/dockerfile:1

FROM node:16-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ./package*.json ./

RUN npm install webpack webpack-cli --yes

RUN ls /app

RUN npm install --production

COPY . .

RUN ls /app

# Add TypeScript dependencies
RUN npm install typescript ts-loader

# Build TypeScript code
RUN ./node_modules/.bin/tsc server.ts

RUN ls /app

RUN npm run build:ci

RUN ls /app

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "start-prod"]
