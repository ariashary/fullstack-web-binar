var router = require('express').Router();

var article_controller = require('../controllers/articlesControllers.js');

// list articles
router.get('/', article_controller.home);

// form insert
router.get('/create', article_controller.create);

// create article
router.post('/create_article', article_controller.create_article);

module.exports = router;