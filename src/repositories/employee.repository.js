const Employee = require("../models/employee.model");

exports.create = (data) => Employee.create(data);

exports.findAll = () => Employee.findAll();

exports.findById = (id) => Employee.findByPk(id);

exports.update = async (id, data) => {
  const emp = await Employee.findByPk(id);
  if (!emp) return null;

  return emp.update(data);
};

exports.delete = async (id) => {
  const emp = await Employee.findByPk(id);
  if (!emp) return null;

  await emp.destroy();
  return true;
};
