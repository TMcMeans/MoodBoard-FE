export const postAffirmation = async (url, affirmation_text) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        affirmation: { affirmation_text }
      })
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const statusCode = await response.json();
    return statusCode;
  } catch (error) {
    return error.message;
  }
};
