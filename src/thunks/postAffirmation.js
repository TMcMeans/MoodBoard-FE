import { hasErrored } from '../actions';

export const postAffirmation = (url, affirmation_text) => {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          affirmation: { affirmation_text }
        })
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
