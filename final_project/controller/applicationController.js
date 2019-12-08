let Articles = require('../model/article');

exports.home = (req, res, next) => {
    res.render('home');
};

exports.about = (req, res, next) => {
    res.render('about');
};

exports.contact = (req, res, next) => {
    res.render('contact');
};