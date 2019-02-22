import React from 'react';
import { shallow } from 'enzyme';
import {
  WriteAffirmation,
  mapStateToProps,
  mapDispatchToProps
} from './WriteAffirmation';
import { postAffirmation } from '../../thunks/postAffirmation';

jest.mock('../../thunks/postAffirmation');

describe('WriteAffirmation', () => {
  let wrapper;
  let mockJournal = {
    entry_text: 'I am angry',
    tones: {
      primary_tone: 'anger'
    }
  };
  beforeEach(() => {
    wrapper = shallow(<WriteAffirmation journal={mockJournal} />);
  });

  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should return a journal object', () => {
    const mockState = {
      journal: {
        entry_text: 'I am so angry.',
        tones: 'anger'
      }
    };

    const expected = { entry_text: 'I am so angry.', tones: 'anger' };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps.journal).toEqual(expected);
  });

  it('mapDispatchToProps should dispatch postAffirmation', () => {
    const mockDispatch = jest.fn();
    postAffirmation.mockImplementation(() => {});

    const expected = postAffirmation('www.journals.com', 'I am sad');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.postAffirmation('www.journals.com', {});

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
