const express = require('express');
const { handleNewURL, handleAnalytics } = require('../controllers/url');

const router = express.Router();

router.post('/', handleNewURL);
router.get('/analytics/:shortID', handleAnalytics);

module.exports = router;
