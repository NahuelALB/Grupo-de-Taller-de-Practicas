const express = require('express');
const router = express.Router();
const professionsController = require('../controllers/professionsControllers');

router.get('/', (req, res) => {
  res.send('Endpoint de professions');
});

module.exports = router;
