export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...action.user };
    case 'LOGOUT_USER':
      return state;
    default:
      return state;
  }
};
