const ApiError = require("../utils/ApiError");

const notFound = (req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  const code = err.statusCode || 500;
  res.status(code).json({ ok: false, message: err.message || "Server error" });
};

module.exports = { notFound, errorHandler };