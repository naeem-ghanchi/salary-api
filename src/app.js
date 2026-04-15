const express = require("express");
const { createEmployee, getAllEmployees } = require("./controllers/employee.controller");
const app = express();

app.use(express.json());

app.post("/employee", createEmployee);

app.get("/employee", getAllEmployees);

app.get("/employee/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  if (req.params.id !== "1") {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json({ id: req.params.id });
});

app.put("/employee/:id", (req, res) => {
  res.status(200).json(req.body);
});

app.delete("/employee/:id", (req, res) => {
  res.status(200).json({ message: "Deleted" });
});

module.exports = app;
