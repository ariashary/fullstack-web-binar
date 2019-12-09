exports.index = function(req, res, next) {
    res.render('index', { title: 'Blog Website' });
};

exports.about = function(req, res, next) {
    res.render('about');
};

exports.contact = function(req, res, next) {
    res.render('contact');
};
