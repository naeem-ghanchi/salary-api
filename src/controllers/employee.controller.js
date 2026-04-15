const schema = require('../validations/employee.validation');
const service = require('../services/employee.service');

exports.createEmployee = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  const employee = await service.createEmployee(req.body);
  res.status(201).json(employee);
};