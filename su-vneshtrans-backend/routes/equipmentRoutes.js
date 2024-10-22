const express = require('express');
const router = express.Router();
const { getAllEquipment, createEquipment } = require('../controllers/equipmentController');

// Маршрут для получения всех записей о технике
router.get('/', getAllEquipment);

// Маршрут для создания новой техники
router.post('/', createEquipment);

module.exports = router;
