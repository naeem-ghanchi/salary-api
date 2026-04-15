const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Employee = sequelize.define("Employee", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Employee;
