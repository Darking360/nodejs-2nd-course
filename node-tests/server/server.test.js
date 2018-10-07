const request = require('supertest');
const app = require('./server').app;

describe('server tests', () => {
it('should return hello world response', (done) => {
    request(app)
      .get('/')
      .expect('Hello world')
      .end(done);
  })
})
  
