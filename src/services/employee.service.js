const repo = require("../repositories/employee.repository");

exports.createEmployee = async (data) => {
  return repo.create(data);
};

exports.getAll = () => repo.findAll();

exports.getById = (id) => repo.findById(id);

exports.updateEmployee = (id, data) => repo.update(id, data);

exports.deleteEmployee = (id) => repo.delete(id);

exports.calculateSalary = async (id) => {
  const emp = await repo.findById(id);
  if (!emp) return null;

  let deduction = 0;

  if (emp.country === "India") {
    deduction = emp.salary * 0.1;
  } else if (emp.country === "United States") {
    deduction = emp.salary * 0.12;
  }

  return {
    gross: emp.salary,
    deduction,
    net: emp.salary - deduction,
  };
};
