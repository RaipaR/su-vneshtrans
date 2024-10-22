const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const { User, Task } = require('./models');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/equipment', require('./routes/equipmentRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

// Синхронизация базы данных
sequelize.sync({ alter: true })  // 
  .then(() => {
    console.log('База данных синхронизирована');
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Ошибка при синхронизации базы данных:', err);
  });

