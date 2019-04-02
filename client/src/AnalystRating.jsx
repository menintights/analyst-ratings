/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import AnalystChart from './AnalystChart.jsx';

class AnalystRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h2 className='Topic'>Analyst Ratings</h2>
        <div className='line'></div>
        <AnalystChart/>
      </div>
    );
  }
}

export default AnalystRating;
