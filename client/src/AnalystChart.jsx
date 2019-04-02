/* eslint-disable class-methods-use-this */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PercentageLine from './PercentageLine.jsx';

class AnalystChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <div>
      <div id="percentageChart" >
        <p id="percentageOfRatings">15%</p>
        <p id="numberOfRatings">of 39 ratings</p>
      </div>
      <div id="analystSuggestions">
        <div id='buy' >
          <div className='analystSuggestion'>Buy </div>
          <PercentageLine percentage={ 0.2 } class={ 'buyLineFront' }/>
        </div>
        <div id="analystSuggestion" >
          <div className='analystSuggestion'>Hold</div>
          <PercentageLine percentage={ 0.3 } class={ 'analystSuggestionLineFront' }/>
        </div>
        <div id="analystSuggestion" >
          <div className='analystSuggestion'>Sell</div>
          <PercentageLine percentage={ 0.5 } class={ 'analystSuggestionLineFront' }/>
        </div>
      </div>

     </div>
    );
  }
}

export default AnalystChart;
