const express = require(`express`);
const server = express();
const routes = require(`./routes`);
const { responseMiddleware, errorMiddleware } = require(`./middlewares`)
const cors = require(`cors`);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(responseMiddleware);
server.use(routes);
server.use(errorMiddleware);

module.exports = server;
