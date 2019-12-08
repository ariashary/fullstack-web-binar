let Article = require('../models/article');

exports.article_list = function(req, res, next) {
    res.send('Article Page');
};