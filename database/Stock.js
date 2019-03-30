const mongoose = require('mongoose');
// const db = require('./index.js');
mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
  id: Number,
  stockName: String,
  price: Number,
  week: Number,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
