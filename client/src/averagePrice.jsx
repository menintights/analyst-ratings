import React from 'react';
// import $ from 'jquery';

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
    currentPriceDistance = currentSpot * 3 / 100 * 655;

    // find the spot for average price
    averagePriceDistance = averageSpot * 3 / 100 * 655;

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
    }

    for (let i = 0; i < allPriceBar.length; i += 1) {
      allData[i] = [];
      allData[i].push(collectPriceData[i][0]);
      allData[i].push(collectPriceData[i][1]);
      allData[i].push(allPriceBar[i].length);
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
   <div style={{ marginBottom: '60' }}>
    <div style={{ position: 'absolute', left: currentPriceDistance - 25 }}>
      <p style={{ fontSize: '16px', margin: '0 0 0 0' }}>{compare}</p>
      <p style={{ fontSize: '13px', margin: '0 0 0 0', textAlign: 'center' }}>Right Now</p>
    </div>
   </div>
   {allData.map(priceData => <Chart key={priceData[0]} priceData = {priceData} average={average} currentPrice={currentPrice} allData={allData}/>)}
   {/* {allPriceData.map(priceData => <Chart key={priceData[0]} priceData = {priceData} average={average / standardized} currentPrice={currentPrice} highestOccurence={highestOccurence} allData={allData}/>)} */}
   <div>
    <div style={{
      width: currentPriceDistance, height: '1px', background: 'grey', marginBottom: '10px', display: 'inline-block',
    }}></div>
    <div style={{
      width: 15, height: 15, background: '#21CE99', display: 'inline-block', marginTop: '-4px', position: 'absolute', borderRadius: 50,
    }}></div>
    <div style={{
      width: 680 - currentPriceDistance, height: '1px', background: 'grey', marginBottom: '10px', display: 'inline-block',
    }}></div>
   </div>

    <div style={{ display: 'inline-block' }}>
      <div style={{ width: '80px', fontSize: '14px', display: 'inline-block' }}>52 Week Low ${lowest}</div>
      <div style={{
        left: averagePriceDistance, width: '80px', fontSize: '14px', display: 'inline-block', textAlign: 'center', position: 'absolute',
      }}><p style={{ margin: '0 0 0 0' }}>Average Price Paid</p><p style={{ margin: '0 0 0 0' }}>${average}</p></div>
      <div style={{
        width: '85px', fontSize: '14px', display: 'inline-block', textAlign: 'right', position: 'absolute', left: 600,
      }}>52 Week High ${highest}</div>
    </div>
  </div>
    );
  }
}

export default AveragePrice;
