const { httpStatus } = require(`../config/consts`);

module.exports = (error, req, res, next) => {
  res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR);
  return res.send({ errors: error.data });
};