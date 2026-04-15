const express = require("express");
const router = express.Router();

const controller = require("../controllers/metrics.controller");

router.get("/country/:country", controller.getCountryMetrics);
router.get("/job/:jobTitle", controller.getJobMetrics);

module.exports = router;
