import React from 'react';
import { shallow } from 'enzyme';
import { Journal, mapStateToProps, mapDispatchToProps } from './Journal';
import { getJournalEntry } from '../../thunks/getJournalEntry';
import { patchJournalEntry } from '../../thunks/patchJournalEntry';

jest.mock('../../thunks/getJournalEntry');
jest.mock('../../thunks/patchJournalEntry');

describe('Journal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Journal getJournalEntry={jest.fn()} />);
  });

  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState of value to a journal entry on componentDidMount', () => {});

  it('mapStateToProps should return a journal object', () => {
    const mockState = { journal: { entry_text: 'I am so sad.' } };
    const expected = { entry_text: 'I am so sad.' };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps.journal).toEqual(expected);
  });

  it('mapDispatchToProps should dispatch getJournalEntry on componentDidMount', () => {
    const mockDispatch = jest.fn();
    getJournalEntry.mockImplementation(() => {});

    const expected = getJournalEntry('www.journals.com');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getJournalEntry('www.journals.com');

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('mapDispatchToProps should dispatch patchJournalEntry when handleSubmit is called', () => {
    const mockDispatch = jest.fn();
    patchJournalEntry.mockImplementation(() => {});

    const expected = patchJournalEntry('www.journals.com', 'I am sad');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.patchJournalEntry('www.journals.com', 'I am sad');

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});

// const movie = {title: 'Jaws'}
// postFavorites.mockImplementation(() => {});
// const expected = postFavorites(movie, 2)

// mappedProps.addFavorite(expected);

// expect(mockDispatch).toHaveBeenCalled();
