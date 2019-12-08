var express = require('express');
var router = express.Router();

// Require controller
var article_controller = require('../controllers/articlesControllers.js');
var application_controller = require('../controllers/applicationController.js');

// Serve static file from folder assets
// and url /assets before find assets
router.use('/assets', express.static('assets'));

// Routes
router.get('/', application_controller.home);

router.get('/about', application_controller.about);

router.get('/contact', application_controller.contact);

// router.get('/articles', article_controller.article_list);

module.exports = router;
