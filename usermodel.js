const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  transport: Number,
  alimentation: Number,
  energie: Number,
  totalCO2: Number,
  recommendations: String,
});

module.exports = mongoose.model('User', userSchema);
