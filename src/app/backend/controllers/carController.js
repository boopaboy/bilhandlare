const Car = require('../models/car');

exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add other controllers (getCarById, updateCar, deleteCar) as needed