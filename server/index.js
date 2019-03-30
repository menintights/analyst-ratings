const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const db = require('../database/index.js');
// const file = require('../client/dist/bundle.js');

app.use(express.static(`${__dirname}/../client/dist`));
// app.use(express.static(`${__dirname}../client/dist`));
app.use(cors());
app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());
app.get('/stock', (req, res) => {
  // let stock = [];
  // let companyName = faker.company.companyName();
  // let price = faker.commerce.price();
  // for (let i = 0; i < 252; i += 1) {
  //   let range = Math.floor(Math.random() * 100);
  //   range *= Math.floor(Math.random() * 2) === 1 ? 0.05 : -0.047;
  //   price *= (1 + range / 100);
  //   price = price.toFixed(2);
  //   stock.push({
  //     stockName: companyName,
  //     price: Number(price),
  //     week: i,
  //   });
  // }

  // db.save(stock);
  res.status(200).json('stock');
});

app.get('/1', (req, res) => {
  // var price = faker.commerce.price();
  // console.log('ran get request', db.get);
  db.get((data) => {
    // if (err) console.log(err);
    // console.log(data);
    res.status(200).json(data);
  });
});


app.listen(port, () => { console.log(`http://localhost:${port}`); });
