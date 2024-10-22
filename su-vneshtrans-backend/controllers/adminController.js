const User = require('../models/User');

// Получение всех пользователей
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();  // Получаем всех пользователей
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении пользователей', error: err.message });
  }
};

// Удаление пользователя
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    await user.destroy();  // Удаляем пользователя
    res.status(200).json({ message: 'Пользователь удалён' });
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при удалении пользователя', error: err.message });
  }
};

// Изменение роли пользователя
exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    user.role = role;  // Обновляем роль пользователя
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при обновлении роли пользователя', error: err.message });
  }
};
