const Task = require('../models/Task');
const User = require('../models/User');

// Получение всех задач
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [{ model: User, attributes: ['username'] }]
    });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении задач', error: err.message });
  }
};

// Создание новой задачи
exports.createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  try {
    const task = await Task.create({ title, description, assignedTo });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при создании задачи', error: err.message });
  }
};

// Обновление статуса задачи
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      task.status = status;
      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Задача не найдена' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при обновлении задачи', error: err.message });
  }
};

// Функция для удаления задачи
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Задача не найдена' });
    }

    await task.destroy();
    res.status(200).json({ message: 'Задача удалена' });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при удалении задачи', error: err.message });
  }
};