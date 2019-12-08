var express = require('express');
var router = express.Router();

// Require controller
var article_controller = require('../controllers/articlesControllers.js');
var application_controller = require('../controllers/applicationController.js');

// Serve static file from folder assets
// and url /assets before find assets
router.use('/assets', express.static('assets'));

// localhost:3000/articles
router.get('/', article_controller.index);

router.get('/detail', article_controller.detail);

router.get('/category', article_controller.category);

// router.get('/:category', (req, res, next) => {
//     res.send(`Anda masuk ke dalam category ${req.params.category}`);
// });

module.exports = router;