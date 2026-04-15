const service = require("../services/metrics.service");

exports.getCountryMetrics = async (req, res) => {
  try {
    const { country } = req.params;

    const data = await service.getCountryMetrics(country);

    if (!data) {
      return res.status(404).json({ error: "No data found" });
    }

    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getJobMetrics = async (req, res) => {
  try {
    const { jobTitle } = req.params;

    const data = await service.getJobMetrics(jobTitle);

    if (!data) {
      return res.status(404).json({ error: "No data found" });
    }

    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
