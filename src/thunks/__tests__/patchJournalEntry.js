import { patchJournalEntry } from '../patchJournalEntry';

import * as Actions from '../../actions';

describe('patchJournalEntry', () => {
  let mockUrl;
  let mockDispatch;
  let mockEntryText;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
    mockDispatch = jest.fn();
    mockEntryText = 'I am happy.';
  });
});

//commit and send async tests to PR review in AM
