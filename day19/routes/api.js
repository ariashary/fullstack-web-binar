var router = require('express').Router();

var api_controller = require('../controllers/apiController');

router.get('/', api_controller.index);

module.exports = router;