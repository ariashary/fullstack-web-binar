const express = require('express');
const router = express.Router();

const article_controller = require('../controller/articleController');

router.get('/', article_controller.index);
router.get('/compose', article_controller.compose);
router.post('/compose', article_controller.compose_post);
router.get('/detail/:articleId', article_controller.detail);
router.get('/delete/:articleId', article_controller.delete);
router.get('/edit/:articleId', article_controller.edit);
router.get('/update', article_controller.update);

module.exports = router;