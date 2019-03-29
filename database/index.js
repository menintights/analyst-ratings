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
  let stockObj = {};
  for (let i = 0; i < data.length; i += 1) {
    stockObj = {
      id: i,
      stockName: data[i].stockName,
      price: data[i].price,
      week: data[i].week,
    };
  }
  const stock = new StockRepo(stockObj);
  // console.log(stock);
  stock.save((err) => {
    if (err) console.log(err);
    // console.log("success")
  });
};


// eslint-disable-next-line func-names
const get = function (callback) {
  // eslint-disable-next-line array-callback-return
  StockRepo.find((err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};

module.exports.save = save;
module.exports.get = get;
