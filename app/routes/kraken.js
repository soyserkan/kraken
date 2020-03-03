const express = require('express');

const kraken = require('../controllers/kraken');

const router = express.Router();

router.get('/', kraken.get);
router.post('/', kraken.post);

module.exports = router;