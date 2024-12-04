const { nanoid } = require('nanoid');
const URL = require('../models/url');

const handleRedirect = async (req, res) => {
  const shortID = req.params.shortID;

  try {
    const result = await URL.findOneAndUpdate(
      { shortID },
      { $push: { visits: { time: Date.now(), ip: req.ip } } }
    );
    res.redirect(result.redirectURL);
  } catch {
    res.status(404).json({ err: 'Url not found' });
  }
};

const handleNewURL = async (req, res) => {
  const redirectURL = req.body.url;
  if (await URL.findOne({ redirectURL })) {
    return res.status(400).json({ Error: 'Url already registered with us!' });
  }
  const shortID = nanoid(7);
  const newUrl = await URL.create({ shortID, redirectURL, visits: [] });
  return res.json(newUrl);
};

const handleAnalytics = async (req, res) => {
  const shortID = req.params.shortID;
  try {
    const result = await URL.findOne({ shortID });
    res.json({
      'Total Visits': result.visits.length,
      'Visit History': result.visits,
    });
  } catch {
    res.status(404).json({ err: 'Url not found' });
  }
};

module.exports = { handleRedirect, handleNewURL, handleAnalytics };
