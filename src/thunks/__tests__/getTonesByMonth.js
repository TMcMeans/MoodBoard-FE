import { getTonesByMonth } from '../getTonesByMonth';

import * as Actions from '../../actions';

describe('getTonesByMonth', () => {
  let mockUrl;
  let mockDispatch;
  let tones;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
    mockDispatch = jest.fn();
    tones = [
      {
        id: '2019-02-12',
        type: 'tone_response',
        attributes: {
          primary_tone: 'confident'
        }
      }
    ];
  });

  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn();

    const thunk = getTonesByMonth(mockUrl);
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

    const thunk = getTonesByMonth(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.hasErrored('an error has occurred')
    );
  });

  it('should dispatch saveJournalEntry if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: tones })
      })
    );

    const thunk = getTonesByMonth(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(Actions.saveMonthTones(tones));
  });
});
