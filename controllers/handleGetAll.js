const modelURL = require('../models/url');

const handleGetAll = async (req, res) => {
  const result = await modelURL.find({});
  const URLMap = { 'Total Count': result.length };
  result.forEach((modelURL) => {
    URLMap[modelURL.shortID] = modelURL.redirectURL;
  });
  res.json(URLMap);
};

module.exports = handleGetAll;
