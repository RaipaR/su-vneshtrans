const User = require('./User');
const Task = require('./Task');

// Ассоциации между моделями
User.hasMany(Task, { foreignKey: 'assignedTo' });
Task.belongsTo(User, { foreignKey: 'assignedTo' });

// Экспортируем модели с ассоциациями
module.exports = {
  User,
  Task,
};