import React from 'react';
import { shallow } from 'enzyme';
import Journal from './Journal';

describe('Journal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Journal />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
