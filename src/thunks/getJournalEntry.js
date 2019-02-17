import { saveJournalEntry, hasErrored } from '../actions';

export const getJournalEntry = url => {
  return async dispatch => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const journal_entry = await response.json();
      dispatch(saveJournalEntry(journal_entry));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
