const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Endpoints de aspirantes');
});

module.exports = router;
