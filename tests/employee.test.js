const request = require('supertest');
const app = require('../src/app');

describe('Employee API', () => {
  it('should create an employee', async () => {
    const res = await request(app)
      .post('/employee')
      .send({
        fullName: "Test User",
        jobTitle: "Developer",
        country: "India",
        salary: 50000
      });

    expect(res.statusCode).toBe(201);
  });
});