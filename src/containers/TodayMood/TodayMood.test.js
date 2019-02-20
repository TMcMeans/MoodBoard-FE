import React from 'react';
import { shallow } from 'enzyme';
import TodayMood from './TodayMood';

describe('TodayMood', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodayMood />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
