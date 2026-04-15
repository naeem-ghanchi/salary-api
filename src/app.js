const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("./controllers/employee.controller");
const app = express();

app.use(express.json());

app.post("/employee", createEmployee);

app.get("/employee", getAllEmployees);

app.get("/employee/:id", getEmployeeById);

app.put("/employee/:id", updateEmployee);

app.delete("/employee/:id", deleteEmployee);

module.exports = app;
