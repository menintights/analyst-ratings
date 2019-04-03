/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../server/index.js');

describe('routes: index', () => {
  afterEach(() => {
    app.close();
  });
  test('should respond as expected', async () => {
    const response = await request(app).get('/stocks');
    expect(response.status).toEqual(200);
    // expect(response.type).toEqual('application/json');
  // expect(response.body.data).to
  });
});
