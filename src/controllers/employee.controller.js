const schema = require("../validations/employee.validation");
const service = require("../services/employee.service");

exports.createEmployee = async (req, res) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const employee = await service.createEmployee(req.body);
    return res.status(201).json(employee);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "fullName must be unique" });
    }

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

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const emp = await service.getById(id);
    if (!emp) {
      return res.status(404).json({ error: "Not found" });
    }
    return res.status(200).json(emp);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const emp = await service.updateEmployee(id, req.body);

    return res.status(200).json(emp);
  } catch {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.delete = async (id) => {
  const emp = await Employee.findByPk(id);
  if (!emp) return null;

  await emp.destroy();
  return true;
};

exports.deleteEmployee = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const deleted = await service.deleteEmployee(id);

    return res.status(200).json({ message: "Deleted" });
  } catch {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
