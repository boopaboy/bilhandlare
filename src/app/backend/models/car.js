// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  miles: { type: Number, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imageArray: { type: [String], required: true },
});

module.exports = mongoose.model('Car', carSchema);