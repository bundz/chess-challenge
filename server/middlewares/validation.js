const { ApiError } = require(`../helpers`)
const { httpStatus } = require(`../config/consts`);

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req, { stripUnknown: true });
    
    if(error) {
      return next({ status: httpStatus.BAD_REQUEST, data: error.details });
    }

    
    req.body = value.body;
    req.params = value.params;
    req.query = value.query;
    next();
  }
};

module.exports = validate;