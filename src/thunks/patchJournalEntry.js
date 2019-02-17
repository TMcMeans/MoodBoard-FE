import { hasErrored } from '../actions';

export const patchJournalEntry = (url, entry_text) => {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          journal_entry: { entry_text }
        })
      });
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
