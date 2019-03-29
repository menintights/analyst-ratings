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
    const current = this.props.currentPrice;
    const average = Number(this.props.average);
    let highlight = false;
    if (average < lowest && highest <= current) {
      highlight = true;
    } else if (average > lowest && highest >= current) {
      highlight = true;
    }

    const divStyle = {
      height: occurence * 4,
      width: '12px',
      // background: '#F45531',
      background: highlight ? '#21CE99' : 'grey',
      margin: '10px 4px 10px 4px',
      display: 'inline-block',
      position: 'absolution',
    };
    const lineStyle = {
      height: 138,
      width: '1px',
      display: current > lowest && current < highest ? 'inline-block' : 'none',
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
