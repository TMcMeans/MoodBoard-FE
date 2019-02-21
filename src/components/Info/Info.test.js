import React from 'react';
import { shallow } from 'enzyme';
import { Info } from './Info';

describe('Info', () => {
  it('should render a snapshot with correct data passed in', () => {
    const wrapper = shallow(<Info />);
    expect(wrapper).toMatchSnapshot();
  });
});
