const schema = require('../validations/employee.validation');

exports.createEmployee = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(req.body);
};