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

exports.getAllEmployees = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getEmployeeById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const emp = await service.getById(id);
    return res.status(200).json(emp);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
