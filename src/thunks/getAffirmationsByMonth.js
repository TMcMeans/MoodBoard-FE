import { hasErrored, isLoading } from '../actions';

export const getAffirmationsByMonth = url => {
  return async dispatch => {
    try {
      // dispatch(isLoading(true));

      // setTimeout(() => {
      //   dispatch(isLoading(true));
      // }, 100);

      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const affirmations = await response.json();
      // dispatch(isLoading(false));
      return affirmations.data.attributes.affirmations;
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
