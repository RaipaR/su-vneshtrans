const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Аутентификация пользователя
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Ищем пользователя по имени пользователя
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Неправильный логин или пароль' });
    }

    // Проверяем пароль
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Неправильный логин или пароль' });
    }

    // Генерируем JWT токен
    const token = jwt.sign({ id: user.id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });

    res.json({ token, role: user.role });
  } catch (err) {
    console.error('Ошибка при входе:', err);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};
