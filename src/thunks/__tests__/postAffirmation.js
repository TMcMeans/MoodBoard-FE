import { postAffirmation } from '../postAffirmation';
import * as Actions from '../../actions';

describe('postAffirmation', () => {
  let mockUrl;
  let mockDispatch;
  let mockAffirmationText;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
    mockDispatch = jest.fn();
    mockAffirmationText = 'I am worthy of love and happiness.';
  });

  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn();

    const expectedBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        affirmation: { affirmation_text: mockAffirmationText }
      })
    };

    const thunk = postAffirmation(mockUrl, mockAffirmationText);
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedBody);
  });

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      });
    });

    const thunk = postAffirmation(mockUrl, mockAffirmationText);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      Actions.hasErrored('an error has occurred')
    );
  });
});
