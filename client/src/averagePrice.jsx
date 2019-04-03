/* eslint-disable prefer-const */
/* eslint-disable max-len */
import React from 'react';
// import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import Chart from './chart.jsx';

class AveragePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let arr = this.props.priceData;
    let highest = Math.max(...this.props.priceData);
    let lowest = Math.min(...this.props.priceData);
    let range = (highest - lowest) / 33;
    let currentPrice = this.props.priceData[this.props.priceData.length - 1];
    let averagePriceDistance = 0;
    let currentPriceDistance = 0;
    let average = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
    let percentage = 0;
    let compare = '';
    let currentSpot = 0;
    let averageSpot = 0;
    let sortPriceData = arr.slice(0).sort((a, b) => a - b);
    let collectPriceData = [];
    let allPriceBar = [];
    let allData = [];

    for (let i = 0; i < 33; i += 1) {
      let tempLow = lowest + range * i;
      let tempHigh = lowest + range * (i + 1);
      if (currentPrice > tempLow && currentPrice < tempHigh) {
        currentSpot = i;
      }
      if (average > tempLow && average < tempHigh) {
        averageSpot = i;
      }
      collectPriceData.push([tempLow.toFixed(2), tempHigh.toFixed(2)]);
    }
    // find the spot for current price
    currentPriceDistance = currentSpot * 20;
    // find the spot for average price
    if (average > currentPrice) {
      averagePriceDistance = averageSpot * 20 - 15;
    } else {
      averagePriceDistance = averageSpot * 20 + 5;
    }
    // console.log(currentPriceDistance, averagePriceDistance)

    for (let i = 0, u = 0; i < sortPriceData.length; i += 1) {
      if (sortPriceData[i] <= Number(collectPriceData[u][1])) {
        if (allPriceBar[u] === undefined) {
          allPriceBar[u] = [];
        }
        allPriceBar[u].push(sortPriceData[i]);
      } else {
        u += 1;
        if (allPriceBar[u] === undefined) {
          allPriceBar[u] = [];
        }
        allPriceBar[u].push(sortPriceData[i]);
      }
    }
    for (let i = 0; i < allPriceBar.length; i += 1) {
      allData[i] = [];
      allData[i].push(collectPriceData[i][0]);
      allData[i].push(collectPriceData[i][1]);
      // if (allPriceBar[i] === undefined) {
      //   allData[i].push(1);
      // } else {
      allData[i].push(allPriceBar[i].length);
      // }
    }
    percentage = Math.floor((currentPrice / average - 1) * 100);
    // Percentage that compare between current Price and average Price
    if (percentage >= 0) {
      compare = `${percentage}% Higher`;
    } else {
      compare = `${Math.abs(percentage)}% Lower`;
    }

    return (
  <div>
   <h2 className='Topic'>Price Paid on Robinhood</h2>
   <div className='line'></div>
   <div id = 'compare'>
    <div style={{ position: 'absolute', left: currentPriceDistance - 23 < 15 ? 15 : currentPriceDistance - 23 }}>
      <p id = 'compare'>{compare}</p>
      <p id = 'rightNow'>Right Now</p>
    </div>
   </div>
   <div id = 'chart' style={{ marginLeft: 7 }}>
    {allData.map(priceData => <Chart key={priceData[0]} priceData = {priceData} average={average} currentPrice={currentPrice} highest={highest}/>)}
   </div>
   <div>
    <span id = 'bottomFrontLine' style={{ width: currentPriceDistance }}></span>
    <span id = 'circle' ></span>
    <span id = 'bottomRareLine' style={{ width: 680 - currentPriceDistance }}></span>
   </div>

    <div style={{ display: 'inline-block' }}>
      <div id = 'lowest'>52 Week Low ${lowest}</div>
      <div id = 'averagePricePaid' style={{ left: averagePriceDistance }}>
        <p className='averagePricePaid'>Average Price Paid</p>
        <p className='averagePricePaid'>${average}</p>
      </div>
      <div id = 'highest'>52 Week High ${highest}</div>
    </div>
  </div>
    );
  }
}

export default AveragePrice;
