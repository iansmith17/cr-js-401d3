'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(user => {
      req.user = user;

      req.token = user.generateToken();
      res.set('X-Token', req.token);
      res.cookie('auth', req.token);

      res.send(req.token);
    })
    .catch(next);
});

const auth = require('./middleware');
authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
