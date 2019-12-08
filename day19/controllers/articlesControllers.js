let Article = require('../models/article');

exports.home = function(req, res, next) {
    Article.find({}, function(err, results) {
        if (err) throw err;
        res.render('articles/index', { data: results });
        console.log(results);
    });
};

exports.detail = function(req, res, next) {
    let params = req.params;
    Article.findOne({ _id: params.articleId }, function(err, result) {
        res.render('articles/detail', { article: result });
        console.log(result);
    });
};

exports.edit = function(req, res, next) {
    let params = req.params;
    Article.find({ _id: params.articleId }, function(err, result) {
        res.render('articles/edit', { article: result });
        console.log(new Date().toLocaleString('en-us', { year: 'numeric', month: 'numeric', day: 'numeric' }));
    });
};

exports.delete = function(req, res, next) {
    let params = req.params;
    Article.deleteOne({ _id: params.articleId }, function(err, result) {
        res.redirect('/articles');
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