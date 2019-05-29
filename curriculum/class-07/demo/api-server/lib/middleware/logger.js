'use strict';

module.exports = function(req, res, next) {
  console.log('LOGGER', `${req.method} ${req.path}`);
  next();
};
