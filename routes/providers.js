const express = require('express');

const providersController = require('../controllers/providers');

const router = express.Router();

router.get('/providers', providersController.getAllProviders);

router.post('/providers', providersController.postAddProvider);

module.exports = router;
