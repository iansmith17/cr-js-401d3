'use strict';

const rtMiddleware = require('../../../lib/middleware/requestTime');

const { server } = require('../../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('requestTime middleware', () => {
  it('adds requestTime to req', done => {
    // Arrange
    let req = {};
    let res = {};

    // Act
    rtMiddleware(req, res, next);

    // Assert
    function next() {
      expect(req.requestTime).toBeDefined();
      done();
    }
  });

  it('runs for home route', () => {
    return mockRequest
      .get('/')
      .expect(200)
      .then(res => {
        // TODO: check for a header or something
      });
  })
});
