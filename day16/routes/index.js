var router = require('express').Router();

var application_controller = require('../controllers/applicationController.js');

router.get('/', application_controller.home);
router.get('/about', application_controller.about);
router.get('/contact', application_controller.contact);

module.exports = router;
