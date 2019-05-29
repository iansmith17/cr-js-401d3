'use strict';

module.exports = function(err, req, res, next) {
  console.error(err);

  // Or this could handle the error response
  // res.status(500);
  // res.send('Oops!');

  // Pass error along to next!
  next(err);
}

// Note Express requires 4 arguments to identify error handler middleware
// console.log('middleware args', module.exports.length);
