import { hasErrored } from '../actions';

export const getAffirmationsByMonth = url => {
  return async dispatch => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const affirmations = await response.json();
      return affirmations;
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
