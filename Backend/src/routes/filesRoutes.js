const express = require('express');
const router = express.Router();
const filesController = require('../controllers/filesController');

router.get('/:type/:image', filesController.getImage);

module.exports = router;
