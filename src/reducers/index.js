import { combineReducers } from 'redux';
import { journalReducer } from './journalReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  journal: journalReducer,
  user: userReducer,
  error: errorReducer,
  isLoading: loadingReducer
});
