'use strict';

const {server} = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

const mongoConnect = require('../../util/mongoose-connect');
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/401d3-people';

describe('People Routes', () => {
  beforeAll(() => {
    return mongoConnect(MONGODB_URI);
  });

  it('can get all people', () => {
    return mockRequest
      .get('/people')
      .expect(200)
      .expect(response => {
        expect(response.body).toBeInstanceOf(Array);
      });
  });
});
