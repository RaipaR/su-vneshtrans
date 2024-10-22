const Expense = require('../models/Expense');
const Order = require('../models/Order');

// Получение всех затрат по заявке
exports.getExpensesByOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const expenses = await Expense.findAll({ where: { orderId } });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении затрат', error: err.message });
  }
};

// Создание нового расхода
exports.createExpense = async (req, res) => {
  const { description, amount, orderId } = req.body;

  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Заявка не найдена' });
    }

    const newExpense = await Expense.create({ description, amount, orderId });
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при создании расхода', error: err.message });
  }
};

// Удаление расхода
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return res.status(404).json({ message: 'Расход не найден' });
    }

    await expense.destroy();
    res.status(200).json({ message: 'Расход удален' });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при удалении расхода', error: err.message });
  }
};
