import { combineReducers } from 'redux';
import { journalReducer } from './journalReducer';

export const rootReducer = combineReducers({
  journal: journalReducer,
  user: userReducer,
  error: errorReducer,
  isLoading: loadingReducer
});
