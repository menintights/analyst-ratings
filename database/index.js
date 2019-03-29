const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stock');

const stockSchema = new mongoose.Schema({
  id: Number,
  stockName: String,
  price: Number,
  week: Number,
});

let StockRepo = mongoose.model('StockRepo', stockSchema);

let save = (data) => {
  stockObj = {};
  for(var i =0; i < data.length; i++){
   stockObj.id = i;
   stockObj.stockName = data[i].stockName;
   stockObj.price = data[i].price;
   stockObj.week = data[i].week;
    
    var stock = new StockRepo(stockObj);
    console.log(stock);
    stock.save((err) => {
      if(err) console.log(err);
      // console.log("success")
    })
   }
}

let get = function (callback){
 StockRepo.find((err, data)=>{
   if(err) console.log(err);
    callback(data)
  });
}

module.exports.save = save;
module.exports.get = get;