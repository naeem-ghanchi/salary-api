const repo = require("../repositories/employee.repository");

exports.createEmployee = async (data) => {
  return repo.create(data);
};

exports.getAll = () => repo.findAll();

exports.getById = (id) => repo.findById(id);

exports.updateEmployee = (id, data) => repo.update(id, data);

exports.deleteEmployee = (id) => repo.delete(id);
