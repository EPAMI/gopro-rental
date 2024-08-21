const mongoose = require('mongoose');

const GoProSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  }
});

const GoPro = mongoose.model('GoPro', GoProSchema);
module.exports = GoPro;
