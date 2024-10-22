const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Маршрут для входа пользователя
router.post('/login', login);

module.exports = router;
