import React from 'react';
import { shallow } from 'enzyme';
import { FormatToolbar } from './FormatToolbar';

describe('FormatToolbar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FormatToolbar />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
