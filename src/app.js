const express = require("express");
const app = express();
const employeeRoutes = require("./routes/employee.routes");
const metricsRoutes = require("./routes/metrics.routes");

app.use(express.json());

app.use("/employee", employeeRoutes);
app.use("/metrics", metricsRoutes);

module.exports = app;
