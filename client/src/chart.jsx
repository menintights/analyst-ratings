import React from 'react';
import $ from 'jquery';

class Chart extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
   }
 } 

 render () {
  let price = this.props.priceData[0]
  let occurence = this.props.priceData[1]
  let currentPrice = this.props.currentPrice
  let average = this.props.average

  console.log(price, Math.floor(currentPrice))
  let divStyle={
   height: occurence*4,
   width: "12px",
   // background: "#F45531",
   background: (price < currentPrice && price > average) || (price > currentPrice && price < average) ? "#21CE99" : "grey",
   margin: "10px 4px 10px 4px",
   display: "inline-block",
   position: "absolution"
  }
  let lineStyle={
   height: this.props.highestOccurence * 4 + 20,
   width: "1px",
   display: price == Math.floor(currentPrice) ? "inline-block" : 'none',
   position: "absolution",
   background: "#21CE99"
  }
  return(
   <div style={{display: "inline-block"}}>
   <div style={divStyle}></div>
   <div style={lineStyle}></div>
   </div>
  )
 }
}

export default Chart