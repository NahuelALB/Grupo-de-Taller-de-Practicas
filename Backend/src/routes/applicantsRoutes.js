const express = require('express');
const router = express.Router();
const applicantsController = require('../controllers/applicantsController');

router.get('/', applicantsController.list);
router.get('/:id', applicantsController.detail);

router.post('/', applicantsController.create);
router.patch('/update/:id', applicantsController.update);

module.exports = router;
