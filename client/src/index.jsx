import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AveragePrice from './averagePrice.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: [],
      price: [],
    };
  }

  componentDidMount() {
    $.get('http://localhost:3000/1', (stockData) => {
      const priceData = [];
      stockData.map(stock => priceData.push(stock.price));
      this.setState({
        stock: stockData,
        price: priceData,
      });
    });
  }

  render() {
    return (
  <div>
   {/* <div>Connected!</div> */}
   <AveragePrice priceData={this.state.price}/>
  </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
