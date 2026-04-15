const repo = require("../repositories/employee.repository");

exports.createEmployee = async (data) => {
  return repo.create(data);
};

exports.getAll = async ({ page, limit }) => {
  const offset = (page - 1) * limit;

  const { rows, count } = await repo.findAll({ limit, offset });

  return {
    data: rows,
    pagination: {
      total: count,
      page,
      limit,
      totalPages: Math.ceil(count / limit),
    },
  };
};

exports.getById = (id) => repo.findById(id);

exports.updateEmployee = (id, data) => repo.update(id, data);

exports.deleteEmployee = (id) => repo.delete(id);

exports.calculateSalary = async (id) => {
  const emp = await repo.findById(id);
  if (!emp) return null;

  const rules = {
    India: 0.1,
    "United States": 0.12,
  };

  const rate = rules[emp.country] || 0;
  const deduction = emp.salary * rate;

  return {
    gross: emp.salary,
    deduction,
    net: emp.salary - deduction,
  };
};
