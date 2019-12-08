let Article = require('../models/article');

// Display list articles
// exports.article_list = function(req, res, next) {
//     res.send('Article Page');
// };

exports.index = function(req, res, next) {
    res.render('articles/home');
};

exports.category = function(req, res, next) {
    res.render('articles/category');
};

exports.detail = function(req, res, next) {
    res.render('articles/detail');
};