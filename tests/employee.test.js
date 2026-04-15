const request = require("supertest");
const app = require("../src/app");

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

    expect(res.statusCode).toBe(200);
  });

  it("should return 404 if employee not found", async () => {
    const res = await request(app).get("/employee/999");

    expect(res.statusCode).toBe(404);
  });

  it("should update employee", async () => {
    const res = await request(app)
      .put("/employee/1")
      .send({ fullName: "Updated Name" });

    expect(res.statusCode).toBe(200);
  });

  it("should delete employee", async () => {
    const res = await request(app).delete("/employee/1");

    expect(res.statusCode).toBe(200);
  });
});
