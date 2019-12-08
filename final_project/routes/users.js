var express = require('express');
var router = express.Router();

const users_controller = require('../controller/usersController');

router.use('/assets', express.static('assets'));

router.get('/signup', users_controller.login);

module.exports = router;
