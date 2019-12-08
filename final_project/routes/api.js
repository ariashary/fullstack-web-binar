const express = require('express');
const router = express.Router();

const api_controller = require('../controller/apiController.js');

router.get('/articles', api_controller.articles);

module.exports = router;