const express = require('express');
const router = express.Router();
const { getAllOrders, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

// Маршрут для получения всех заявок
router.get('/', getAllOrders);

// Маршрут для создания новой заявки
router.post('/', createOrder);

// Маршрут для обновления заявки
router.put('/:id', updateOrder);

// Маршрут для удаления заявки
router.delete('/:id', deleteOrder);

module.exports = router;
