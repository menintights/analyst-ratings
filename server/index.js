const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 3000;
var faker = require('faker');
const db = require('../database/index.js')

// app.use(express.static(__dirname + ''));
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.get('/', (req,res)=>{
 let stock = [];
 let companyName = faker.company.companyName();
 let price = faker.commerce.price();
 for(let i = 0; i < 252; i++){
  let range = Math.floor(Math.random()*100) + 1;
  range *= Math.floor(Math.random()*2) == 1 ? 0.05 : -0.047;
  price *= (1 + range/100);
  price = price.toFixed(2);
  stock.push({
   stockName: companyName,
   price: Number(price),
   week: i
  })
 }

 db.save(stock, (err, success)=>{
  if(err) console.log(err)
  console.log(success)
 });
 res.status(200).json(stock)
})

app.get('/1', (req,res)=>{
 // var price = faker.commerce.price();
 db.get((data)=>{
  // console.log(data)
  res.status(200).json(data);
 });
 
})

app.listen(port, ()=>{console.log(`http://localhost:${port}`)})