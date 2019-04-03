/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AveragePrice from './averagePrice.jsx';
import AnalystRating from './Analyst Rating/AnalystRating.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: [],
      price: [],
      ratings: [],
    };
  }

  componentDidMount() {
    $.get('http://localhost:3000/stocks', (stockData) => {
      const priceData = [];
      stockData.map(stock => priceData.push(stock.price));
      this.setState({
        stock: stockData,
        price: priceData,
      });
    });

    $.get('http://localhost:3000/ratings', (Data) => {
      const ratingsData = [];
      Data.map(ratings => ratingsData.push(ratings.rating));
      this.setState({
        ratings: ratingsData,
      });
    });
  }

  render() {
    return (
  <div>
   <AveragePrice priceData={this.state.price}/>
   <AnalystRating ratings={this.state.ratings}/>
  </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
