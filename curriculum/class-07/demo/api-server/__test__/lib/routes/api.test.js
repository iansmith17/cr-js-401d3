'use strict';

const { server } = require('../../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API routes', () => {
  it('can get empty list of posts', () => {
    return mockRequest
      .get('/api/v1/posts')
      .expect(200)
      .expect([]);
  });

  it('can create new post', () => {
    return mockRequest
      .post('/api/v1/posts')
      .send({ title: 'Test!' })
      .expect(200)
      .expect({
        id: 1,
        title: 'Test!'
      });
  });

  it('can read post by id', () => {
    return mockRequest
      .get('/api/v1/posts/1')
      .expect(200)
      .expect({
        id: 1,
        title: 'Test!'
      });
  });

  it('returns 404 for missing id', () => {
    return mockRequest
      .get('/api/v1/posts/2')
      .expect(404)
      .expect({});
  })

  it('can get list of posts', () => {
    return mockRequest
      .get('/api/v1/posts')
      .expect(200)
      .expect([
        { id: 1, title: 'Test!' },
      ]);
  });

});
