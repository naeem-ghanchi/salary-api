const repo = require("../repositories/employee.repository");

exports.getCountryMetrics = async (country) => {
  const result = await repo.getCountryMetrics(country);

  if (!result || !result.count) return null;

  return {
    min: Number(result.min),
    max: Number(result.max),
    avg: Number(result.avg),
  };
};

exports.getJobMetrics = async (jobTitle) => {
  const result = await repo.getJobMetrics(jobTitle);

  if (!result || !result.count) return null;

  return {
    avg: Number(result.avg),
  };
};
