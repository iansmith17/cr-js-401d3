'use strict';

const chalk = require('chalk');

module.exports = function(color) {

  return (req, res, next) => {
    let colorize = chalk.bgKeyword(color);
    console.log(
      colorize(`${req.method} ${req.path}`));
    next();
  }

};
