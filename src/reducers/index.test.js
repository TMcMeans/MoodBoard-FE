import { rootReducer } from './index';
import { createStore } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { journalReducer } from './journalReducer';
import { userReducer } from './userReducer';

describe('rootReducer', () => {
  let store = createStore(rootReducer);
  it('should show initial state of error when errorReducer handles an action', () => {
    expect(store.getState().error).toEqual(errorReducer('', {}));
  });

  it('should show initial state of isLoading when loadingReducer handles an action', () => {
    expect(store.getState().isLoading).toEqual(loadingReducer(false, {}));
  });

  it('should show initial state of journal when journalReducer handles an action', () => {
    expect(store.getState().journal).toEqual(journalReducer({}, {}));
  });

  it('should show initial state of user when userReducer handles an action', () => {
    expect(store.getState().user).toEqual(userReducer({}, {}));
  });
});
