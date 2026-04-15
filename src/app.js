const express = require('express');
const app = express();

app.use(express.json());

app.post('/employee', (req, res) => {
  if (!req.body.fullName) {
    return res.status(400).json({ error: 'fullName required' });
  }
  if (!req.body.jobTitle) {
    return res.status(400).json({ error: 'jobTitle required' });
  }
  if (!req.body.country) {
    return res.status(400).json({ error: 'country required' });
  }
  if (!req.body.salary) {
    return res.status(400).json({ error: 'salary required' });
  }
  res.status(201).json(req.body);
});

module.exports = app;