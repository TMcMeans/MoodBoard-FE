import React from 'react';
import { shallow } from 'enzyme';
import { DailyView, mapStateToProps, mapDispatchToProps } from './DailyView';
import { getJournalEntryByDate } from '../../thunks/getJournalEntryByDate';

jest.mock('../../thunks/getJournalEntryByDate');

describe('DailyView', () => {
  let wrapper;
  let mockJournal = {
    journal_entry_text: 'I am angry',
    primary_tone: 'angry'
  };
  beforeEach(() => {
    wrapper = shallow(<DailyView journal={mockJournal} />);
  });

  it('should render a snapshot with correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should return a journal object', () => {
    const mockState = { journal: { entry_text: 'I am so sad.' } };
    const expected = { entry_text: 'I am so sad.' };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps.journal).toEqual(expected);
  });

  it('mapDispatchToProps should dispatch getJournalEntryByDate', () => {
    const mockDispatch = jest.fn();
    getJournalEntryByDate.mockImplementation(() => {});

    const expected = getJournalEntryByDate('www.journals.com');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getJournalEntryByDate('www.journals.com');

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
