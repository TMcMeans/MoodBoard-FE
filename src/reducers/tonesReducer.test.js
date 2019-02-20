import { tonesReducer } from './tonesReducer';

describe('tonesReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = tonesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an array of month_tones', () => {
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    };

    const expected = [
      {
        id: '2019-02-12',
        type: 'tone_response',
        attributes: {
          primary_tone: 'confident'
        }
      }
    ];

    const result = tonesReducer(undefined, {
      type: 'SAVE_MONTH_TONES',
      month_tones: [
        {
          id: '2019-02-12',
          type: 'tone_response',
          attributes: {
            primary_tone: 'confident'
          }
        }
      ]
    });

    expect(result).toEqual(expected);
  });
});
