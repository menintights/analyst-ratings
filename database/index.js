const mongoose = require('mongoose');
const Stock = require('./Stock.js');

const mongoUri = 'mongodb://localhost/stock';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

const get = (callback) => {
  Stock.find((err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};


const test = (id, callback) => {
  const query = { id };
  Stock.find(query, (err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};

module.exports = db;
// module.exports.save = save;
module.exports.test = test;
module.exports.get = get;
