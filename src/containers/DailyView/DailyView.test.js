import React from 'react';
import { shallow } from 'enzyme';
import DailyView from './DailyView';

describe('DailyView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DailyView />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
