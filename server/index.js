const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const db = require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let stockData = [];
let ratingsData = [];

app.get('/stocks', (req, res) => {
  // set Default data equal to 001
  if (stockData.length === 0) {
    db.getPaidPrice('001', (data) => {
      stockData = data;
      res.status(200).json(stockData);
    });
  } else {
    res.status(200).json(stockData);
  }
});

app.get('/stock/:id', (req, res) => {
  db.getRating(req.params.id, (data) => {
    ratingsData = data;
  });
  db.getPaidPrice(req.params.id, (data) => {
    // console.log(data);
    stockData = data;
    res.redirect('/');
    // console.log(stockData);
    // res.status(200).json(data);
  });
});

app.get('/ratings', (req, res) => {
  // set Default data equal to 001
  if (ratingsData.length === 0) {
    db.getRating('001', (data) => {
      ratingsData = data;
      res.status(200).json(ratingsData);
    });
  } else {
    res.status(200).json(ratingsData);
  }
});
// app.get('/ratings/:id', (req, res) => {
//   db.getRating(req.params.id, (data) => {
//     ratingsData = data;
//     res.redirect('/');
//     // res.status(200).json(data);
//   });
// });

app.listen(port, () => { console.log(`http://localhost:${port}`); });
