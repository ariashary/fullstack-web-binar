var router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Article Page');
});

router.get('/:category', (req, res, next) => {
    res.send(`Anda masuk ke dalam category ${req.params.category}`);
});

module.exports = router;