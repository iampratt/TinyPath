const modelURL = require('../models/url');

const handleRedirect = async (req, res) => {
  const shortID = req.params.shortID;

  try {
    const result = await modelURL.findOneAndUpdate(
      { shortID },
      { $push: { visits: { time: Date.now(), ip: req.ip } } }
    );
    res.redirect(result.redirectURL);
  } catch {
    res.status(404).json({ err: 'URL not found' });
  }
};

module.exports = handleRedirect;
