const express = require('express');
const router = express.Router();
const professionsController = require('../controllers/professionsController');

router.get('/', professionsController.list);

module.exports = router;
