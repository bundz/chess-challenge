const errorMiddleware = require(`./error`);
const responseMiddleware = require(`./response`);
const routeMiddleware = require(`./route`);
const validationMiddleware = require(`./validation`);

module.exports = {
  errorMiddleware,
  responseMiddleware,
  routeMiddleware,
  validationMiddleware
}