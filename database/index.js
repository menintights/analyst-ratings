const mongoose = require('mongoose');
const Stock = require('./Stock.js');

const mongoUri = 'mongodb://localhost/stock';

mongoose.connect(mongoUri);
const db = mongoose.connection;

// mongoose.connect('mongodb://localhost/stock');

// const stockSchema = new mongoose.Schema({
//   id: Number,
//   stockName: String,
//   price: Number,
//   week: Number,
// });

// const StockRepo = mongoose.model('StockRepo', stockSchema);

// const save = (data) => {
//   const stockObj = {};
//   console.log(data);
//   for (let i = 0; i < data.length; i += 1) {
//     stockObj.id = i;
//     stockObj.stockName = data[i].stockName;
//     stockObj.price = data[i].price;
//     stockObj.week = data[i].week;
//     const stock = new StockRepo(stockObj);
//     // console.log(stock);
//     stock.create();
//   }
// };

const get = (callback) => {
  console.log(Stock.find({ week: 23 }));
  Stock.find((err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};

// const get = (id, callback) => {
//  const query = { id };
//  Stock.find(query, (err, data) => {
//    if (err) callback(err);
//    callback(data);
//  });
// };

module.exports = db;
// module.exports.save = save;
module.exports.get = get;
