import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';
import { getTonesByMonth } from '../../thunks/getTonesByMonth';

jest.mock('../../thunks/getTonesByMonth');

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should return an array of tones', () => {
    const mockState = { tones: ['sadness', 'anger'] };
    const expected = ['sadness', 'anger'];

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps.tones).toEqual(expected);
  });

  it('mapDispatchToProps should dispatch getTonesByMonth', () => {
    const mockDispatch = jest.fn();
    getTonesByMonth.mockImplementation(() => {});

    const expected = getTonesByMonth('www.journals.com');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getTonesByMonth('www.journals.com');

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
