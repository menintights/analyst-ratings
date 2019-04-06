/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import PercentageLine from '../Analyst Rating/PercentageLine.jsx';

const wrap = shallow(
 <PercentageLine percentage={30}/>,
);

describe('PercentageLine Test Suite', () => {
  it('The props contains className and children', () => {
    expect('className' in wrap.props()).toEqual(true);
    expect('children' in wrap.props()).toEqual(true);
  });
});
