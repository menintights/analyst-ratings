import React from 'react';

const PercentageLine = props => (
 <div className='analystSuggestionPercentage'>
  <div className={props.class} style={{ width: 400 * props.percentage }}></div>
  <div className='analystSuggestionLineEnd'>
   <span className = 'suggestionPercentage' id={props.class}>{props.percentage }%</span>
   <div className = 'analystSuggestionLineEndBackground' id={props.class} style={{ width: 400 * (1 - props.percentage) }}></div>
  </div>
 </div>
);

export default PercentageLine;
