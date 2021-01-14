const express = require('express');

const channelsController = require('../controllers/channels');

const router = express.Router();

router.get('/channels', channelsController.getAllChannels);

router.post('/channels', channelsController.postAddChannel);

module.exports = router;
