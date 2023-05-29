import request from 'supertest';
import app from '../app';

describe('Test the app healthcheck', () => {
  test('It should respond to GET requests', async () => {
    const response = await request(app).get('/healthcheck');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('OK');
  });
});
