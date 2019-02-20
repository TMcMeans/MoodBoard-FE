export const tonesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_MONTH_TONES':
      return action.month_tones;
    default:
      return state;
  }
}