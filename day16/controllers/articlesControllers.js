let Article = require('../models/article');

exports.home = function(req, res, next) {
    Article.find({}, function(err, results) {
        if (err) throw err;
        res.render('articles/home', { data: results });
    });
};

exports.create = function(req, res, next) {
    res.render('articles/create');
};

exports.create_article = function(req, res, next) {
    console.log(req.body);
    let article = new Article(req.body)
    article.save((err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            res.redirect('/articles');
        }
    });
};