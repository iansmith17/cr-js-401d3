'use strict';

const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('has a home page', () => {
    return mockRequest
      .get('/')
      .expect(200);
  });

  it('returns 404 for bad link', () => {
    return mockRequest
      .get('/404')
      .expect(404);
  });

  it('returns 500 for error', () => {
    return mockRequest
      .get('/test/error')
      .expect(500);
  })

  it('returns 200 for static file', () => {
    return mockRequest
      .get('/test.txt')
      .expect(200);
  });
});
