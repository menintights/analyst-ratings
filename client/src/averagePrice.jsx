import React from 'react';
import $ from 'jquery';
import Chart from './chart.jsx'


class AveragePrice extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
   }
 } 

 render () {
  let counts = [];
  let allPriceData = [];
  let onlyPriceData = [];
  let arr = this.props.priceData;
  let sum = 0;
  let standardized = 1;
  let highest = Math.max(...this.props.priceData);
  let lowest = Math.min(...this.props.priceData);
  let standardize = true;
  let currentPrice = 0;
  let averagePriceDistance = 0;
  let currentPriceDistance = 0;
  let average = (sum/arr.length);
  let percentage = 0;

  arr.map((x)=> sum+=x);
  

  while(standardize){
    standard(standardized);
    var count = 0
    for(let i in counts){
      count++
    }
    count < 32 ? standardize = false : null
    standardized += 0.5
  }

  function standard(standardized){
    counts = [];
    for (var i = 0; i < arr.length; i++) {
      let num = Math.floor(arr[i]/standardized);
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  }

  for(var i in counts){
    onlyPriceData.push(Number(i));
    allPriceData.push([Number(i),counts[i]]);
  }

  average = (sum/arr.length).toFixed(2);
  currentPrice = this.props.priceData[this.props.priceData.length-1]/standardized;
  averagePriceDistance = onlyPriceData.indexOf(Math.floor(average/standardized))/allPriceData.length*620;
  currentPriceDistance = onlyPriceData.indexOf(Math.floor(currentPrice))/allPriceData.length*620;
  
  percentage = Math.ceil((currentPrice/average + 1)*100 - 100)
  console.log('distance',currentPrice/average)

  return (
  <div>
   <h2>Price Paid on Robinhood</h2>
   <div style={{marginBottom:"60"}}>
    <div style={{position:"absolute", left: currentPriceDistance}}>
      <p style={{fontSize: "16px", margin: "0 0 0 0"}}>{percentage}% Higher </p>
      <p style={{fontSize: "13px", margin: "0 0 0 0"}}>Right Now</p>
    </div>
   </div>
   {allPriceData.map((priceData)=> 
    <Chart priceData = {priceData} average={average/standardized} currentPrice={currentPrice}/>
   )}
   
    <div style={{width: "620px", height: "1px", background: "grey", marginBottom: "10px"}}></div>
    
    <div style={{display: "inline-block"}}>
      <div style={{width: "80px", fontSize:"14px", display: "inline-block"}}>52 Week Low ${lowest}</div>
      <div style={{width: "80px", fontSize:"14px", display: "inline-block", textAlign: 'center', position: 'absolute', left: averagePriceDistance}}><p style={{margin: "0 0 0 0"}}>Average Price Paid</p><p style={{margin: "0 0 0 0"}}>${average}</p></div>
      <div style={{width: "85px", fontSize:"14px", display: "inline-block", textAlign: 'right', position: 'absolute', left: 560}}>52 Week High ${highest}</div>
    </div>
  </div>
   )
 }
}

export default AveragePrice