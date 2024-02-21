const express = require('express');
const router = express.Router();
const applicantsController = require('../controllers/applicantsController');

router.get('/', applicantsController.list);
router.get('/:id', applicantsController.detail);

module.exports = router;
