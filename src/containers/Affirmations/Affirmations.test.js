import React from 'react';
import { shallow } from 'enzyme';
import { Affirmations } from './Affirmations';

describe('Affirmations', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Affirmations />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
