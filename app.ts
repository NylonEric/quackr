require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2999;
const router = require('./lib/router');

app.set('port', port);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(router);

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,  {
  cors: {
    origin: `http://127.0.0.1:${port}`,
    methods: ["*"],
    allowedHeaders: ["Authorization"],
    credentials: true,
  },
});

module.exports = {
  server,
  app,
};