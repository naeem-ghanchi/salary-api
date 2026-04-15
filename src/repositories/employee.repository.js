const Employee = require("../models/employee.model");

exports.create = (data) => Employee.create(data);
