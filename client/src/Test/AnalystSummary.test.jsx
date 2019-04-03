/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import AnalystSummary from '../Analyst Rating/AnalystSummary.jsx';

const wrap = shallow(
 <AnalystSummary />,
);

describe('AnalystSummary Test Suite', () => {
  it('The state can be change', () => {
    wrap.setState({ buyReadMore: true });
    wrap.setState({ sellReadMore: true });
    expect(wrap.state('buyReadMore')).toEqual(true);
    expect(wrap.state('sellReadMore')).toEqual(true);
  });
});
