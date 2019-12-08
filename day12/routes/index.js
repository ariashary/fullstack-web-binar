var express = require('express');
var router = express.Router();

// Serve static file from folder assets
// and url /assets before find assets
router.use('/assets', express.static('assets'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
