import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with a new error message', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'an error has occurred'
    };

    const expected = 'an error has occurred';

    const result = errorReducer('', mockAction);

    expect(result).toEqual(expected);
  });
});
