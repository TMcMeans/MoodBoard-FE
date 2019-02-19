import { postAffirmation } from './postAffirmation';

describe('postAffirmation', () => {
  let mockUrl;
  let mockAffirmationText;
  beforeEach(() => {
    mockUrl = 'www.journals.com';
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

    postAffirmation(mockUrl, mockAffirmationText);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedBody);
  });

  it('should return an error message is response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      });
    });

    const result = await postAffirmation(mockUrl, mockAffirmationText);
    expect(result).toEqual('an error has occurred');
  });

  it('should return a status code if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ statusCode: 200 })
      });
    });

    const result = await postAffirmation(mockUrl, mockAffirmationText);

    expect(result).toEqual({ statusCode: 200 });
  });
});
