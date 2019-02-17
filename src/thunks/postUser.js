import { hasErrored, loginUser } from '../actions';

export const postUser = (url, user) => {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...user
        })
      });
      const user = await response.json();
      dispatch(loginUser(user));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
