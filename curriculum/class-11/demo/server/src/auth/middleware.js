'use strict';

const User = require('./users-model');

module.exports = (req, res, next) => {
  if (!req.headers.authorization)
    return next();

  let [authType, authString] = req.headers.authorization.split(' ');

  switch(authType.toLowerCase()) {
    case 'basic':
      return _authBasic(authString);
    default:
      return _authError();
  }

  function _authenticate(user) {
    if (!user)
      return _authError();

    req.user = user;
    req.token = user.generateToken();
    console.log({ token: req.token })
    next();
  }

  function _authBasic(authBase64String) {
    let base64Buffer = Buffer.from(authBase64String, 'base64');
    let authString = base64Buffer.toString();
    console.log({ base64Buffer, authString });
    let [username, password] = authString.split(':');
    let auth = { username, password };

    return User.authenticateBasic(auth)
      .then(user => _authenticate(user));
  }

  function _authError() {
    next({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid Username/Password'
    });
  }
};
