// Middleware для проверки, является ли пользователь администратором
const isAdmin = (req, res, next) => {
    const userRole = req.user.role;  // Предполагается, что в req.user хранится информация о пользователе
  
    if (userRole !== 'admin') {
      return res.status(403).json({ message: 'Доступ запрещён. Только для администраторов.' });
    }
  
    next();
  };
  
  module.exports = isAdmin;
  