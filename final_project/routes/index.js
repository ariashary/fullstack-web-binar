const express = require('express');
const router = express.Router();

const application_controller = require('../controller/applicationController');

router.get('/', application_controller.home);
router.get('/about', application_controller.about);
router.get('/contact', application_controller.contact);

module.exports = router;
