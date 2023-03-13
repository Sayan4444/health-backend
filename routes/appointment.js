const express = require('express');
const router = express.Router();
const { addData } = require('../controllers/appointment');

router.post('/', addData);

module.exports = router;