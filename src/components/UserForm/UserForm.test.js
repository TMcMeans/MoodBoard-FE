import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';

describe('UserForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserForm />);
  });

  it('should render a snapshot with correct data passed in', () => {
    wrapper = shallow(<UserForm type={'login'} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a snapshot with correct data passed in', () => {
    wrapper = shallow(<UserForm type={'signup'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
