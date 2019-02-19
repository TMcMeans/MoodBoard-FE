import { patchJournalEntry } from '../patchJournalEntry';

import * as Actions from '../../actions';

describe('patchJournalEntry', () => {
  let mockUrl;
  let mockDispatch;
  let mockEntryText;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
    mockDispatch = jest.fn();
    mockEntryText = 'I am happy.';
  });
  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn();

    const expectedBody = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        journal_entry: { entry_text: mockEntryText }
      })
    };

    const thunk = patchJournalEntry(mockUrl, mockEntryText);
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedBody);
  });

  it('should dispatch hasErrored with a message if the repsonse is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      });
    });

    const thunk = patchJournalEntry(mockUrl, mockEntryText);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.hasErrored('an error has occurred')
    );
  });

  it('should dispatch saveJournalEntry with an entry object if response is ok', async () => {
    //Write test to mock dispatch the saveJournalEntry action
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockEntryText })
      });
    });

    const thunk = patchJournalEntry(mockUrl, mockEntryText);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.saveJournalEntry({ data: 'I am happy.' })
    );
  });
});
