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
  let highestOccurence = 0;
  let standardize = true;
  let currentPrice = 0;
  let averagePriceDistance = 0;
  let currentPriceDistance = 0;
  let average = (sum/arr.length);
  let percentage = 0;
  let compare = "";
  let adjusted = 0;

  arr.map((x)=> sum+=x);

  while(standardize){
    standard(standardized);
    var count = 0
    for(let i in counts){
      count++
    }
    count <= 32 ? standardize = false : null
    standardized += 0.1
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
    counts[i] > highestOccurence ? highestOccurence = counts[i] : null
  }

  average = (sum/arr.length).toFixed(2);
  currentPrice = this.props.priceData[this.props.priceData.length-1]/standardized;
  currentPrice > average/standardized ? adjusted = 10 : adjusted = -10;
  // find the spot for average price
  onlyPriceData.indexOf(Math.ceil(average/standardized)) === -1 
  ? averagePriceDistance = onlyPriceData.indexOf(Math.ceil(average/standardized)+1) * 20 + adjusted
  : averagePriceDistance = onlyPriceData.indexOf(Math.floor(average/standardized)+1) * 20 + adjusted

  // find the spot for current price 
  onlyPriceData.indexOf(Math.floor(currentPrice)+1) === -1 
  ? currentPriceDistance = onlyPriceData.indexOf(Math.ceil(currentPrice)+1) * 20 - 7 
  : currentPriceDistance = onlyPriceData.indexOf(Math.floor(currentPrice)+1) * 20 - 7 

  percentage = Math.floor((currentPrice/(average/standardized)-1) * 100)
  compare = percentage >= 0 ? percentage + "% Higher" : Math.abs(percentage) + "% Lower"

  return (
  <div>
   <h2>Price Paid on Robinhood</h2>
   <div style={{marginBottom: "60"}}>
    <div style={{position:"absolute", left: currentPriceDistance-25}}>
      <p style={{fontSize: "16px", margin: "0 0 0 0"}}>{compare}</p>
      <p style={{fontSize: "13px", margin: "0 0 0 0", textAlign: 'center'}}>Right Now</p>
    </div>
   </div>
   {allPriceData.map((priceData)=> 
    <Chart key={priceData[0]} priceData = {priceData} average={average/standardized} currentPrice={currentPrice} highestOccurence={highestOccurence}/>
   )}
   <div>
    <div style={{width: currentPriceDistance, height: "1px", background: "grey", marginBottom: "10px", display: "inline-block"}}></div>
    <div style={{width: 15, height:15, background:'#21CE99', display: "inline-block", marginTop: "-4px", position: "absolute", borderRadius: 50}}></div>
    <div style={{width: 655-currentPriceDistance, height: "1px", background: "grey", marginBottom: "10px", display: "inline-block"}}></div>
   </div>
    
    <div style={{display: "inline-block"}}>
      <div style={{width: "80px", fontSize:"14px", display: "inline-block"}}>52 Week Low ${lowest}</div>
      <div style={{left: averagePriceDistance*0.89, width: "80px", fontSize:"14px", display: "inline-block", textAlign: 'center', position: 'absolute'}}><p style={{margin: "0 0 0 0"}}>Average Price Paid</p><p style={{margin: "0 0 0 0"}}>${average}</p></div>
      <div style={{width: "85px", fontSize:"14px", display: "inline-block", textAlign: 'right', position: 'absolute', left: 580}}>52 Week High ${highest}</div>
    </div>
  </div>
   )
 }
}

export default AveragePrice