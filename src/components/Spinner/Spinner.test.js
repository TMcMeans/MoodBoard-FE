import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from './Spinner';

describe('Logo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
