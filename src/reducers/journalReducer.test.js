import { journalReducer } from './journalReducer';

describe('journalReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = journalReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with a journal_entry', () => {
    const expected = {
      attributes: {
        entry_text: 'Hello world'
      }
    };

    const result = journalReducer(
      {},
      {
        type: 'SAVE_JOURNAL_ENTRY',
        journal_entry: {
          attributes: {
            entry_text: 'Hello world'
          }
        }
      }
    );
    expect(result).toEqual(expected);
  });
});
