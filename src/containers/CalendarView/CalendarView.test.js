import React from 'react';
import { shallow } from 'enzyme';
import { CalendarView } from './CalendarView';
import { getTonesByMonth } from '../../thunks/getTonesByMonth';

jest.mock('../../thunks/getTonesByMonth');

describe('CalendarView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CalendarView tones={['sadness', 'confident', 'anger']} />
    );
  });

  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state of date when component mounts', () => {});

  it('should change state of date when onChange is called', () => {});

  it('mapDispatchToProps should dispatch getTonesByMonth onComponentDidMount', () => {});
});

// it('should dispatch deleteFavorite thunk when removeFavorite is called from props', () => {
//   deleteFavorite.mockImplementation(() => {});
//   const expected = deleteFavorite(2, 3);
//   mappedProps.removeFavorite(2, 3);

//   expect(mockDispatch).toHaveBeenCalledWith(expected);
// });
