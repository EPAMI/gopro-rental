const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
