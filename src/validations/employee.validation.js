const Joi = require("joi");

const schema = Joi.object({
  fullName: Joi.string().required(),
  jobTitle: Joi.string().required(),
  country: Joi.string().required(),
  salary: Joi.number().min(0).required(),
});

module.exports = schema;
