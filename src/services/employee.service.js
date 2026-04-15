const repo = require("../repositories/employee.repository");

exports.createEmployee = async (data) => {
  return repo.create(data);
};

exports.getAll = () => repo.findAll();
