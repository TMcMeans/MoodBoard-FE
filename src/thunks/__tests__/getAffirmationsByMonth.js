import { getAffirmationsByMonth } from '../getAffirmationsByMonth';

import * as Actions from '../../actions';

describe('getAffirmationsByMonth', () => {
  let mockUrl;
  let mockDispatch;
  let mockJournalsByMonth;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
    mockDispatch = jest.fn();
    mockJournalsByMonth = {
      attributes: {
        date: '2019-02',
        affirmations: [
          {
            date: '2019-02-12',
            affirmation_text: 'I am beautiful.',
            tone: 'confident'
          }
        ]
      }
    };
  });

  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn();

    const thunk = getAffirmationsByMonth(mockUrl);
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

    const thunk = getAffirmationsByMonth(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.hasErrored('an error has occurred')
    );
  });
});
