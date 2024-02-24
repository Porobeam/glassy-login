const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/register', indexController.register);

module.exports = router;