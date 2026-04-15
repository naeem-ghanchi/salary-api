const schema = require("../validations/employee.validation");
const service = require("../services/employee.service");

exports.createEmployee = async (req, res) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const employee = await service.createEmployee(req.body);

    return res.status(201).json(employee);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
