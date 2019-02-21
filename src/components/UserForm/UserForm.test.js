import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';

describe('UserForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserForm />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
