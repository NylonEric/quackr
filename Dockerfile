# syntax=docker/dockerfile:1

FROM node:16-alpine
ENV NODE_ENV=production
ENV PORT=80

WORKDIR /app

COPY ./package*.json ./

RUN npm install webpack webpack-cli --yes

RUN npm install --production

COPY . .

# Add TypeScript dependencies
RUN npm install typescript ts-loader

# Build TypeScript code
RUN ./node_modules/.bin/tsc server.ts

EXPOSE 80

CMD ["npm", "run", "start-prod"]
