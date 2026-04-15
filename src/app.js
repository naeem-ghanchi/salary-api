const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
} = require("./controllers/employee.controller");
const app = express();

app.use(express.json());

app.post("/employee", createEmployee);

app.get("/employee", getAllEmployees);

app.get("/employee/:id", getEmployeeById);

app.put("/employee/:id", (req, res) => {
  res.status(200).json(req.body);
});

app.delete("/employee/:id", (req, res) => {
  res.status(200).json({ message: "Deleted" });
});

module.exports = app;
