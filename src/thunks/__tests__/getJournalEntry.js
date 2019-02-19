import { getJournalEntry } from '../getJournalEntry';

import * as Actions from '../../actions';

describe('getJournalEntry', () => {
  let mockUrl;
  let mockDispatch;
  let mockJournalEntry;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
    mockDispatch = jest.fn();
    mockJournalEntry = {
      attributes: {
        created_at: '2019-02-19T00:00:00.000Z',
        entry_text: 'I am upset today. I slipped on ice and my back hurts.',
        tones: {
          id: 9,
          primary_tone: 'sadness',
          secondary_tone: 'analytical',
          journal_entry_id: 10,
          created_at: '2019-02-19T00:40:00.018Z',
          updated_at: '2019-02-19T00:51:18.180Z',
          primary_score: '0.796933',
          secondary_score: '0.824412'
        }
      }
    };
  });

  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn();

    const thunk = getJournalEntry(mockUrl);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch hasErrored with a message if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      });
    });

    const thunk = getJournalEntry(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.hasErrored('an error has occurred')
    );
  });

  it('should dispatch saveJournalEntry if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockJournalEntry })
      })
    );

    const thunk = getJournalEntry(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.saveJournalEntry(mockJournalEntry.attributes)
    );
  });
});
