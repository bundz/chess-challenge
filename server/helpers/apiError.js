const { httpStatus } = require(`../config/consts`);

class ApiError extends Error {
  constructor({ message, data, status }) {
    super(message);
    this.message = message;
    this.data = data;
    this.status = status;
    this.errno = data.errno;
  }

  static BadRequest(message, data) {
    return new ApiError({ message, data, status: httpStatus.BAD_REQUEST });
  }

  static Unauthorized(message = `Unauthorized`, data) {
    return new ApiError({ message, data, status: httpStatus.UNAUTHORIZED });
  }

  static NotFound(message = `Not Found`, data) {
    return new ApiError({ message, data, status: httpStatus.NOT_FOUND });
  }

  static Conflict(message = `Conflict`, data) {
    return new ApiError({ message, data, status: httpStatus.CONFLICT });
  }

  static InternalServerError(message = `Internal Server Error`, data) {
    return new ApiError({ message, data, status: httpStatus.INTERNAL_SERVER_ERROR });
  }
}

module.exports = ApiError;