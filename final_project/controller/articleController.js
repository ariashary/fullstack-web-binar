let Articles = require('../model/article');

exports.index = (req, res, next) => {
    Articles.find({}, function(err, results) {
        if (err) throw err;
        res.render('articles/index', { data: results });
    });
};

exports.compose = (req, res, next) => {
    res.render('articles/compose');
};

exports.compose_post = (req, res, next) => {
    let article = new Articles(req.body)
    article.save((err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            res.redirect("/articles");
        }
    });
};

exports.detail = (req, res, next) => {
    let params = req.params;
    Articles.findOne({ _id: params.articleId }, function(err, result) {
        res.render('articles/detail', { article: result });
        console.log(result);
    });
};

exports.delete = function(req, res, next) {
    let params = req.params;
    Articles.deleteOne({ _id: params.articleId }, function(err, result) {
        res.redirect('/articles');
    });
};

exports.edit = function(req, res, next) {
    let params = req.params;
    Articles.findOne({ _id: params.articleId }, function(err, result) {
        res.render('articles/edit', { article: result });
    });
};

exports.update = (req, res, next) => {
    res.redirect("/articles");
};