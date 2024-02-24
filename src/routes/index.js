const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/login', indexController.showLogin);
router.get('/register', indexController.showRegister);

module.exports = router;