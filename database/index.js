const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stock');

const stockSchema = new mongoose.Schema({
  id: Number,
  stockName: String,
  price: Number,
  week: Number,
});

const StockRepo = mongoose.model('StockRepo', stockSchema);

const save = (data) => {
  const stockObj = {};
  for (let i = 0; i < data.length; i += 1) {
    stockObj.id = i;
    stockObj.stockName = data[i].stockName;
    stockObj.price = data[i].price;
    stockObj.week = data[i].week;
    const stock = new StockRepo(stockObj);
    // console.log(stock);
    stock.save();
  }
};

const get = (callback) => {
  StockRepo.find((err, data) => {
    if (err) return err;
    callback(data);
  });
};

module.exports.save = save;
module.exports.get = get;
