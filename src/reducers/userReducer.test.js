import { userReducer } from './userReducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });
  it('should return state with a user on type LOGIN_USER', () => {
    const mockState = {
      type: 'LOGIN_USER',
      user: { name: 'SoanSo', id: 1 }
    };

    const expected = { name: 'SoanSo', id: 1 };
    const result = userReducer(
      {},
      {
        type: 'LOGIN_USER',
        user: { name: 'SoanSo', id: 1 }
      }
    );

    expect(result).toEqual(expected);
  });
  it('should return state with an empty object on type LOGOUT_USER', () => {
    const mockState = {
      type: 'LOGOUT_USER'
    };

    const expected = {};

    const result = userReducer(
      {},
      {
        type: 'LOGOUT_USER'
      }
    );
    expect(result).toEqual(expected);
  });
});
