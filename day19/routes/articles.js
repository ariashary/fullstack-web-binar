var router = require('express').Router();

var article_controller = require('../controllers/articlesControllers.js');

router.get('/', article_controller.home);
router.get('/create', article_controller.create);
router.post('/create_article', article_controller.create_article);
router.get('/detail/:articleId', article_controller.detail);
router.get('/delete/:articleId', article_controller.delete);
router.get('/edit/:articleId', article_controller.edit);

module.exports = router;