const express = require('express');

const bouquetsController = require('../controllers/bouquets');

const router = express.Router();

router.get('/bouquets/provider', bouquetsController.getBouquetsByProvider);

router.post('/bouquets', bouquetsController.postAddBouquet);

module.exports = router;
