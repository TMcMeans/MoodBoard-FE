import React from 'react';
import { shallow } from 'enzyme';
import CalendarView from './CalendarView';

describe('CalendarView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalendarView />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
