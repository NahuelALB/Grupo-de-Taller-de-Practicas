const express = require('express');
const router = express.Router();
const applicantsController = require('../controllers/applicantsControllers');

router.get('/', (req, res) => {
  res.send('Endpoints de aspirantes');
});

module.exports = router;
