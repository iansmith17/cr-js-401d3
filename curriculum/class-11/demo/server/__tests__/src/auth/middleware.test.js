'use strict';

const supergoose = require('../../supergoose.js');
const auth = require('../../../src/auth/middleware.js');
const Users = require('../../../src/auth/users-model.js');

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

beforeAll(async () => {
  await supergoose.startDB();
  await new Users(users.admin).save();
  await new Users(users.editor).save();
  await new Users(users.user).save();
});

afterAll(supergoose.stopDB);

describe('Auth Middleware', () => {
  
  // admin:password: YWRtaW46cGFzc3dvcmQ=
  // admin:foo: YWRtaW46Zm9v

});