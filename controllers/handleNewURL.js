const { nanoid } = require('nanoid');
const modelURL = require('../models/url');

const handleNewURL = async (req, res) => {
  const redirectURL = req.body.url;
  try {
    new URL(redirectURL);
    if (await modelURL.findOne({ redirectURL })) {
      return res.status(400).json({ err: 'URL already registered with us!' });
    }
    const shortID = nanoid(7);
    const newURL = await modelURL.create({ shortID, redirectURL, visits: [] });
    return res.json({ shortID });
  } catch (err) {
    res.status(400).json({ err: 'Invalid URL!' });
  }
};

module.exports = handleNewURL;
