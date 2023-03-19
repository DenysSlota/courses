
export async function fetchAPI(url, headers) {
    try {
      const response = await fetch(url, headers);
      if (!response.ok) {
        console.error('Could not fetch: ' + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Could not fetch.', error.message);
    }
};