const app = require('../server/app.js');
const request = require('supertest')

//test server implementation
describe('Test api path /api/item/:item_id', () => {
  test('Should return status code of 200', (done) => {
    request(app).get('/api/item/1')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Expect response to be an array', () => {
  test('Should return true if response is an array', (done) => {
    request(app).get('/api/item/1')
    .then((response) => {
      expect(Array.isArray(response.body)).toBe(true);
      done();
    });
  });
});

describe('Expect url to begin with http', () => {
  test('Should return true if response is an array', (done) => {
    request(app).get('/api/item/1')
    .then((response) => {
      expect(response.body[0].img_url.substring(0, 5)).toBe('https');
      done();
    });
  });
});