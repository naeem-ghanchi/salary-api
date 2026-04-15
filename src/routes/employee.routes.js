const express = require("express");
const router = express.Router();

const controller = require("../controllers/employee.controller");

router.post("/employee", controller.createEmployee);
router.get("/employee", controller.getAllEmployees);
router.get("/employee/:id", controller.getEmployeeById);
router.put("/employee/:id", controller.updateEmployee);
router.delete("/employee/:id", controller.deleteEmployee);

module.exports = router;
