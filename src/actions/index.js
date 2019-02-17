export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const saveJournalEntry = journal_entry => ({
  type: 'SAVE_JOURNAL_ENTRY',
  journal_entry
});
