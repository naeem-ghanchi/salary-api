const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/database/db");
const Employee = require("../src/models/employee.model");

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  await Employee.destroy({ where: {} });
});

describe("Employee API", () => {
  it("should create an employee", async () => {
    const res = await request(app).post("/employee").send({
      fullName: "Test User",
      jobTitle: "Developer",
      country: "India",
      salary: 50000,
    });

    expect(res.statusCode).toBe(201);
  });

  it("should fail if fullName is missing", async () => {
    const res = await request(app).post("/employee").send({
      jobTitle: "Developer",
      country: "India",
      salary: 50000,
    });

    expect(res.statusCode).toBe(400);
  });

  it("should fail if fullName, jobTitle, country, or salary is missing", async () => {
    const res = await request(app).post("/employee").send({
      fullName: "Test User",
      country: "India",
      salary: 50000,
    });

    expect(res.statusCode).toBe(400);
  });

  it("should fail if salary is negative", async () => {
    const res = await request(app).post("/employee").send({
      fullName: "Naeem",
      jobTitle: "Developer",
      country: "India",
      salary: -100,
    });

    expect(res.statusCode).toBe(400);
  });

  it("should return all employees", async () => {
    const res = await request(app).get("/employee");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should return employee by id", async () => {
    const res = await request(app).get("/employee/1");

    expect(res.statusCode).toBe(404);
  });

  it("should return 404 if employee not found", async () => {
    const res = await request(app).get("/employee/999");

    expect(res.statusCode).toBe(404);
  });

  it("should update employee", async () => {
    const create = await request(app).post("/employee").send({
      fullName: "Old",
      jobTitle: "Dev",
      country: "India",
      salary: 50000,
    });

    const res = await request(app)
      .put(`/employee/${create.body.id}`)
      .send({ fullName: "Updated" });

    expect(res.statusCode).toBe(200);
    expect(res.body.fullName).toBe("Updated");
  });

  it("should delete employee", async () => {
    const create = await request(app).post("/employee").send({
      fullName: "Old",
      jobTitle: "Dev",
      country: "India",
      salary: 50000,
    });

    const res = await request(app).delete(`/employee/${create.body.id}`);

    expect(res.statusCode).toBe(200);
  });

  it("should fail for invalid id format", async () => {
    const res = await request(app).get("/employee/abc");

    expect(res.statusCode).toBe(400);
  });

  it("should fail if fullName already exists", async () => {
    const payload = {
      fullName: "Naeem",
      jobTitle: "Dev",
      country: "India",
      salary: 50000,
    };

    await request(app).post("/employee").send(payload);

    const res = await request(app).post("/employee").send(payload);

    expect(res.statusCode).toBe(400);
  });

  it("should calculate salary for India (10% deduction)", async () => {
    const create = await request(app).post("/employee").send({
      fullName: "Naeem",
      jobTitle: "Dev",
      country: "India",
      salary: 50000,
    });

    const res = await request(app).get(`/employee/${create.body.id}/salary`);

    expect(res.statusCode).toBe(200);
    expect(res.body.net).toBe(45000);
  });

  it("should calculate salary for US (12% deduction)", async () => {
    const create = await request(app).post("/employee").send({
      fullName: "John",
      jobTitle: "Dev",
      country: "United States",
      salary: 100000,
    });

    const res = await request(app).get(`/employee/${create.body.id}/salary`);

    expect(res.body.net).toBe(88000);
  });

  it("should return full salary for other countries", async () => {
    const create = await request(app).post("/employee").send({
      fullName: "Ali",
      jobTitle: "Dev",
      country: "UAE",
      salary: 50000,
    });

    const res = await request(app).get(`/employee/${create.body.id}/salary`);

    expect(res.body.net).toBe(50000);
  });

  it("should return 404 if employee not found", async () => {
    const res = await request(app).get("/employee/999/salary");
    expect(res.statusCode).toBe(404);
  });

  it("should return 400 for invalid id", async () => {
    const res = await request(app).get("/employee/abc/salary");
    expect(res.statusCode).toBe(400);
  });

  it("should return salary metrics for a country", async () => {
    await request(app).post("/employee").send({
      fullName: "A",
      jobTitle: "Dev",
      country: "India",
      salary: 100,
    });

    await request(app).post("/employee").send({
      fullName: "B",
      jobTitle: "Dev",
      country: "India",
      salary: 300,
    });

    const res = await request(app).get("/metrics/country/India");

    expect(res.statusCode).toBe(200);
    expect(res.body.min).toBe(100);
    expect(res.body.max).toBe(300);
    expect(res.body.avg).toBe(200);
  });

  it("should return 404 if no employees in country", async () => {
    const res = await request(app).get("/metrics/country/Unknown");
    expect(res.statusCode).toBe(404);
  });
});
