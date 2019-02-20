import { saveMonthTones, hasErrored } from '../actions';

export const getTonesByMonth = (url) => {
  return async dispatch => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const tone_data = await response.json();
      await dispatch(saveMonthTones(tone_data.data));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
