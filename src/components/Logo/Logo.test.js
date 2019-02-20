import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './Logo';

describe('Logo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
