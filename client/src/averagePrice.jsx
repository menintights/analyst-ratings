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
    const arr = this.props.priceData;
    const highest = Math.max(...this.props.priceData);
    const lowest = Math.min(...this.props.priceData);
    const range = (highest - lowest) / 33;
    const currentPrice = this.props.priceData[this.props.priceData.length - 1];
    let averagePriceDistance = 0;
    let currentPriceDistance = 0;
    const average = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
    let percentage = 0;
    let compare = '';
    let currentSpot = 0;
    let averageSpot = 0;
    const sortPriceData = arr.slice(0).sort();
    const collectPriceData = [];
    const allPriceBar = [];
    const allData = [];

    for (let i = 0; i < 33; i += 1) {
      const tempLow = lowest + range * i;
      const tempHigh = lowest + range * (i + 1);
      if (currentPrice > tempLow && currentPrice < tempHigh) {
        currentSpot = i;
      }
      if (average > tempLow && average < tempHigh) {
        averageSpot = i;
      }
      collectPriceData.push([tempLow.toFixed(2), tempHigh.toFixed(2)]);
    }
    // find the spot for current price
    currentPriceDistance = currentSpot * 3 / 100 * 655 + 500;
    // find the spot for average price
    averagePriceDistance = averageSpot * 3 / 100 * 655 + 100;

    // console.log(currentPriceDistance, averagePriceDistance)

    if (highest > 0) {
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
        allData[i].push(allPriceBar[i].length);
      }
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
   <h2>Price Paid on Robinhood</h2>
   <div id = 'compare'>
    <div style={{ position: 'absolute', left: currentPriceDistance - 25 }}>
      {/* <p id = 'compare'>{compare}</p> */}
      <p id = 'rightNow'>Right Now</p>
    </div>
   </div>
   {/* <div id = 'chart'>{allData.map(priceData => <Chart key={priceData[0]} priceData = {priceData} average={average} currentPrice={currentPrice}/>)}</div> */}
   <div>
    <span id = 'bottomFrontLine' style={{ width: currentPriceDistance }}></span>
    <span id = 'circle' ></span>
    <span id = 'bottomRareLine' style={{ width: 680 - currentPriceDistance }}></span>
   </div>

    <div style={{ display: 'inline-block' }}>
      <div id = 'lowest'>52 Week Low ${lowest}</div>
      <div id = 'averagePricePaid' style={{ left: averagePriceDistance }}><p style={{ margin: '0 0 0 0' }}>Average Price Paid</p><p style={{ margin: '0 0 0 0' }}>${average}</p></div>
      <div style={{
        width: '85px', fontSize: '14px', display: 'inline-block', textAlign: 'right', position: 'absolute', left: 600,
      }}>52 Week High ${highest}</div>
    </div>
  </div>
    );
  }
}

export default AveragePrice;
