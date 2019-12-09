let Article = require('../models/article');

exports.index = function(req, res, next) {
    Article.find({}, function(err, results) {
        if (err) throw err;
        
        if (results) {
            res.status(200).send({
                status: "SUCCESS",
                results: results,
                error: []
            });
        } else {
            res.status(200).send({
                status: "SUCCESS",
                results: null,
                error: ["Data tidak tersedia"]
            });
        }
    });
};