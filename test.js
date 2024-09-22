const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello, Cloud & DevOps World!', done => {
    request(app).get('/').expect('Hello, Cloud & DevOps World!', done);
  });
});
