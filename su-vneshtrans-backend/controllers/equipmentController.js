const Equipment = require('../models/Equipment');

// Получение всей техники
exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findAll();
    res.status(200).json(equipment);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении техники', error: err.message });
  }
};

// Создание новой записи о технике
exports.createEquipment = async (req, res) => {
  const { name, type, description, imageUrl } = req.body;

  try {
    const newEquipment = await Equipment.create({
      name,
      type,
      description,
      imageUrl, // Пока просто строка, позже можно добавить загрузку файлов
    });

    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при создании записи о технике', error: err.message });
  }
};
