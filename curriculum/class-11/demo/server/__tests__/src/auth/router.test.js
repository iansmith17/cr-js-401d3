'use strict';

process.env.STORAGE = 'mongo';

const jwt = require('jsonwebtoken');

const { server } = require('../../../src/app.js');
// const supergoose = require('../../supergoose.js');

const supertest = require('supertest');
const mockRequest = supertest(server);

let users = [
  {username: 'user-admin', password: 'password1', role: 'admin'},
  {username: 'user-editor', password: 'password2', role: 'editor'},
  {username: 'user-user', password: 'password3', role: 'user'},
];

  // beforeAll(supergoose.startDB);
  // afterAll(supergoose.stopDB);

describe('Auth Router', () => {
  beforeAll(() => {
    const mongoose = require('mongoose');
    const options = {
      useNewUrlParser:true,
      useCreateIndex: true,
    };
    return mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auth_test', options);
  })

  // For admin, editor, user, etc
  describe.each(users.map(u => [u.username, u.role, u]))(
    `User '%s' with role '%s'`,
    (username, role, user) => {
      // console.log({username, role, user});

      it('can POST JSON to create one', () => {
        return mockRequest
          .post(user)
          .send(user)
          .expect(200)
      });
    }
  )
});
