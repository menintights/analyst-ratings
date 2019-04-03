/* eslint-disable no-undef */
const request = require('supertest');
const server = require('../../server/index.js');

afterEach(() => {
  server.close();
});

describe('routes: index', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/stocks');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
  // expect(response.body.data).to
  });
});
