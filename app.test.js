const request = require('supertest');
const app = require('./app');

let server;

beforeAll((done) => {
  server = app.listen(0, () => done()); // Random port for tests
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should return Hello World message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World from CodeCatalyst!');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
