const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the ping path', () => {
  test('It should respond with statusCode 418', async () => {
      const response = await request(app).get('/ping');
      expect(response.statusCode).toBe(418);
  });
});
