import React from 'react';
import { shallow } from 'enzyme';
import WriteAffirmation from './WriteAffirmation';

describe('WriteAffirmation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WriteAffirmation />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
