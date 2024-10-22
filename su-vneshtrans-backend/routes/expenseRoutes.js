const express = require('express');
const router = express.Router();
const { getExpensesByOrder, createExpense, deleteExpense } = require('../controllers/expenseController');

// Получение всех затрат по заявке
router.get('/order/:orderId', getExpensesByOrder);

// Создание нового расхода
router.post('/', createExpense);

// Удаление расхода
router.delete('/:id', deleteExpense);

module.exports = router;
