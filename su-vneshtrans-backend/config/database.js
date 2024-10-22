const { Sequelize } = require('sequelize');
require('dotenv').config();  // Для загрузки переменных окружения из файла .env

// Подключение к базе данных PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,    // Имя базы данных
  process.env.DB_USER,    // Имя пользователя
  process.env.DB_PASSWORD,  // Пароль
  {
    host: process.env.DB_HOST,  // Хост (обычно 'localhost' для локальной базы данных)
    dialect: 'postgres',        // Указываем, что используем PostgreSQL
    logging: false,             // Отключаем вывод SQL-запросов в консоль
  }
);

// Проверка подключения к базе данных
sequelize.authenticate()
  .then(() => {
    console.log('Успешное подключение к базе данных');
  })
  .catch((err) => {
    console.error('Ошибка при подключении к базе данных:', err);
  });

module.exports = sequelize;
