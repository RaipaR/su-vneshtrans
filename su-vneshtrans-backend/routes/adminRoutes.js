const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/adminMiddleware');
const { getAllUsers, deleteUser, updateUserRole } = require('../controllers/adminController');

// Получение всех пользователей (доступно только администраторам)
router.get('/users', isAdmin, getAllUsers);

// Удаление пользователя (доступно только администраторам)
router.delete('/users/:id', isAdmin, deleteUser);

// Изменение роли пользователя (доступно только администраторам)
router.put('/users/:id', isAdmin, updateUserRole);

module.exports = router;
