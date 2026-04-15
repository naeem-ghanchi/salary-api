const express = require("express");
const router = express.Router();

const controller = require("../controllers/metrics.controller");

router.get("/country/:country", controller.getCountryMetrics);

module.exports = router;
