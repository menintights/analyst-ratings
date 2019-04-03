/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PercentageLine from './PercentageLine.jsx';

class AnalystChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let total = 0;
    let buySuggestion = 0;
    let holdSuggestion = 0;
    let sellSuggestion = 0;
    let buyPercent = 0;
    let holdPercent = 0;
    let sellPercent = 0;
    const { ratings } = this.props;

    if (ratings.length > 0) {
      total = this.props.ratings.length;
      buySuggestion = ratings.filter(x => x === 'Buy').length;
      holdSuggestion = ratings.filter(x => x === 'Hold').length;
      sellSuggestion = ratings.filter(x => x === 'Sell').length;
      buyPercent = Math.round(buySuggestion / total * 100);
      holdPercent = Math.round(holdSuggestion / total * 100);
      sellPercent = Math.round(sellSuggestion / total * 100);
    }

    return (
     <div>
      <div id="percentageChart" >
        <p id="percentageOfRatings">{ buyPercent }%</p>
        <p id="numberOfRatings">{ buySuggestion } of {total} ratings</p>
      </div>
      <div id="analystSuggestions">
        <div id='buy' >
          <div className='analystSuggestion'>Buy </div>
          <PercentageLine percentage={ buyPercent } class={ 'buyLineFront' }/>
        </div>
        <div id="analystSuggestion" >
          <div className='analystSuggestion'>Hold</div>
          <PercentageLine percentage={ holdPercent } class={ 'analystSuggestionLineFront' }/>
        </div>
        <div id="analystSuggestion" >
          <div className='analystSuggestion'>Sell</div>
          <PercentageLine percentage={ sellPercent } class={ 'analystSuggestionLineFront' }/>
        </div>
      </div>
     </div>
    );
  }
}

export default AnalystChart;
