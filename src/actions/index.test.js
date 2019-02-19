import * as actions from './index';

describe('actions', () => {
  it('isLoading should return an object with a bool and type of IS_LOADING', () => {
    const isLoading = false;
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading
    };

    const result = actions.isLoading(isLoading);

    // Expectation
    expect(result).toEqual(expectedAction);
  });

  it('hasErrored should return an object with a user and type of HAS_ERRORED', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: 'HAS_ERRORED',
      message: error
    };

    const result = actions.hasErrored(error);
    expect(result).toEqual(expectedAction);
  });

  it('loginUser should return an object with a user and type of LOGIN_USER', () => {
    const user = {
      name: 'SoandSo',
      id: 1
    };
    const expectedAction = {
      type: 'LOGIN_USER',
      user
    };

    const result = actions.loginUser(user);
    expect(result).toEqual(expectedAction);
  });

  it('logoutUser should return an object with a type of LOGOUT_USER', () => {
    const expectedAction = {
      type: 'LOGOUT_USER'
    };

    const result = actions.logoutUser();
    expect(result).toEqual(expectedAction);
  });

  it('saveJournalEntry should return an object with a journal_entry and type of SAVE_JOURNAL_ENTRY', () => {
    const journal_entry = 'I feel upset today.';
    const expectedAction = {
      type: 'SAVE_JOURNAL_ENTRY',
      journal_entry
    };

    const result = actions.saveJournalEntry(journal_entry);
    expect(result).toEqual(expectedAction);
  });
});
