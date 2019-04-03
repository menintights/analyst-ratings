const mongoose = require('mongoose');
const Stock = require('./Stock.js');
const Rating = require('./AnalystRating.js');

const mongoUri = 'mongodb://localhost/stock';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

const get = (callback) => {
  Stock.find((err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};

const getPaidPrice = (id, callback) => {
  const query = { id };
  Stock.find(query, (err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};

const getRating = (id, callback) => {
  const query = { id };
  Rating.find(query, (err, data) => {
    if (err) console.log(err);
    callback(data);
  });
};

module.exports = db;
module.exports.getPaidPrice = getPaidPrice;
module.exports.get = get;
module.exports.getRating = getRating;
