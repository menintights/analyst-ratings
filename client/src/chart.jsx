import React from 'react';
// import $ from 'jquery';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const lowest = Number(this.props.priceData[0]);
    const highest = Number(this.props.priceData[1]);
    const occurence = this.props.priceData[2];
    // const price = this.props.priceData[0];
    // const occurence = this.props.priceData[1];
    const { currentPrice } = this.props;
    const average = Number(this.props.average);
    const { allData } = this.props;

    console.log(average > lowest && average < highest);
    console.log(lowest, highest, average);

    const divStyle = { 
      height: occurence * 4,
      width: '12px',
      // background: '#F45531',
      background: average < lowest && highest <= currentPrice ? '#21CE99' : 'grey',
      margin: '10px 4px 10px 4px',
      display: 'inline-block',
      position: 'absolution',
    };
    const lineStyle = {
      height: 138,
      width: '1px',
      display: (currentPrice > lowest && currentPrice < highest) ? 'inline-block' : 'none',
      position: 'absolution',
      background: '#21CE99',
    };
    return (
   <div style={{ display: 'inline-block' }}>
    <div style={lineStyle}></div>
    <div style={divStyle}></div>
   </div>
    );
  }
}

export default Chart;
