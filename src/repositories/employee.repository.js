const Employee = require("../models/employee.model");

exports.create = (data) => Employee.create(data);

exports.findAll = () => Employee.findAll();

exports.findById = (id) => Employee.findByPk(id);
