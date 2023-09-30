const express = require("express");
const router = require('./routes/index.js')
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const server = express(); //se almacena la libreria en una variavle
// const cors = require("cors");



server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);
server.use(cookieParser());


module.exports = server;
