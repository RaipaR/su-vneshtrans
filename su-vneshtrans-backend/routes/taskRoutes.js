const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, updateTaskStatus, deleteTask } = require('../controllers/taskController');

// Получение всех задач
router.get('/', getAllTasks);

// Создание новой задачи
router.post('/', createTask);

// Обновление статуса задачи
router.put('/:id/status', updateTaskStatus);

// Удаление задачи
router.delete('/:id', deleteTask);

module.exports = router;
