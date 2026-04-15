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

  it('should fail if fullName is missing', async () => {
  const res = await request(app)
    .post('/employee')
    .send({
      fullName: "Test User",
      jobTitle: "Developer",
      country: "India",
      salary: 50000
    });

    expect(res.statusCode).toBe(400);
  });

  it('should fail if fullName, jobTitle, country, or salary is missing', async () => {
  const res = await request(app)
    .post('/employee')
    .send({
      country: "India",
      salary: 50000
    });

  expect(res.statusCode).toBe(400);
});
});
