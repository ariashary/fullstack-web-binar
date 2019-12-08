let Articles = require('../model/article');

exports.articles = (req, res, next) => {
    Articles.find({}, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
};