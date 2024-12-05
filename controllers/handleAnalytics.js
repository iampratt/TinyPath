const modelURL = require('../models/url');

const handleAnalytics = async (req, res) => {
  const shortID = req.params.shortID;
  try {
    const result = await modelURL.findOne({ shortID });
    res.json({
      'Total Visits': result.visits.length,
      'Visit History': result.visits,
    });
  } catch {
    res.status(404).json({ err: 'URL not found' });
  }
};

module.exports = handleAnalytics;
