import { loadingReducer } from './loadingReducer';

describe('loadingReducer', () => {
  it('should return initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with isLoading boolean', () => {
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    };

    const expected = true;

    const result = loadingReducer(undefined, {
      type: 'IS_LOADING',
      isLoading: true
    });

    expect(result).toEqual(expected);
  });
});
