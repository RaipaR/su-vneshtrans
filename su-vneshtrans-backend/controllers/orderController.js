const Order = require('../models/Order');

// Получение всех заявок
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении заявок', error: err.message });
  }
};

// Создание новой заявки
exports.createOrder = async (req, res) => {
  const { orderNumber, client, cargo, departureDate, arrivalDate, departurePlace, arrivalPlace, invoiceIssued, status } = req.body;

  try {
    const newOrder = await Order.create({
      orderNumber,
      client,
      cargo,
      departureDate,
      arrivalDate,
      departurePlace,
      arrivalPlace,
      invoiceIssued,
      status,
    });

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при создании заявки', error: err.message });
  }
};

// Обновление заявки
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { orderNumber, client, cargo, departureDate, arrivalDate, departurePlace, arrivalPlace, invoiceIssued, status } = req.body;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: 'Заявка не найдена' });
    }

    await order.update({
      orderNumber,
      client,
      cargo,
      departureDate,
      arrivalDate,
      departurePlace,
      arrivalPlace,
      invoiceIssued,
      status,
    });

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при обновлении заявки', error: err.message });
  }
};

// Удаление заявки
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: 'Заявка не найдена' });
    }

    await order.destroy();
    res.status(200).json({ message: 'Заявка удалена' });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при удалении заявки', error: err.message });
  }
};
