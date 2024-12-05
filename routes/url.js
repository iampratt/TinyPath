const express = require('express');
const handleNewURL = require('../controllers/handleNewURL');
const handleAnalytics = require('../controllers/handleAnalytics');
const handleGetAll = require('../controllers/handleGetAll');

const router = express.Router();

router.post('/', handleNewURL);
router.get('/analytics/:shortID', handleAnalytics);
router.get('/allUrls', handleGetAll);

module.exports = router;
