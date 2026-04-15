const express = require("express");
const app = express();

app.use(express.json());

app.post("/employee", (req, res) => {
  if (!req.body.fullName) {
    return res.status(400).json({ error: "fullName required" });
  }
  if (!req.body.jobTitle) {
    return res.status(400).json({ error: "jobTitle required" });
  }
  if (!req.body.country) {
    return res.status(400).json({ error: "country required" });
  }
  if (!req.body.salary) {
    return res.status(400).json({ error: "salary required" });
  }
  if (req.body.salary < 0) {
    return res.status(400).json({ error: "Invalid salary" });
  }
  res.status(201).json(req.body);
});

app.get("/employee", (req, res) => {
  res.status(200).json([]);
});

app.get("/employee/:id", (req, res) => {
  if (req.params.id !== "1") {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json({ id: req.params.id });
});

module.exports = app;
