import { combineReducers } from 'redux';
import { journalReducer } from './journalReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { tonesReducer } from './tonesReducer';

export const rootReducer = combineReducers({
  journal: journalReducer,
  user: userReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  tones: tonesReducer
});
