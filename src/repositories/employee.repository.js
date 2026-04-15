const { fn, col } = require("sequelize");
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

exports.getCountryMetrics = async (country) => {
  return Employee.findOne({
    attributes: [
      [fn("MIN", col("salary")), "min"],
      [fn("MAX", col("salary")), "max"],
      [fn("AVG", col("salary")), "avg"],
      [fn("COUNT", col("id")), "count"],
    ],
    where: { country },
    raw: true,
  });
};

exports.getJobMetrics = async (jobTitle) => {
  return Employee.findOne({
    attributes: [
      [fn("AVG", col("salary")), "avg"],
      [fn("COUNT", col("id")), "count"],
    ],
    where: { jobTitle },
    raw: true,
  });
};
