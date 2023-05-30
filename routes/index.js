var express = require('express');
const userController = require('../src/controllers/userController');
var router = express.Router();

/* GET home page. */
router.get('/', userController.index);
router.get('/list', userController.list);

module.exports = router;
