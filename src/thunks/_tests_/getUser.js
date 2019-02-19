import { hasErrored, loginUser } from '../actions';

export const fetchUser = (url, user) => {
  return async dispatch => {
    try {
      //Write async logic once endpoint has been solidified on BE
      dispatch(loginUser(user));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
