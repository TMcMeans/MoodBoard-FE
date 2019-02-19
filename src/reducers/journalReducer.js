export const journalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_JOURNAL_ENTRY':
      return action.journal;
    default:
      return state;
  }
};
