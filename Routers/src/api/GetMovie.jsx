// Fetch movie data using TMDb API
export const getDetails = async (params ) => {
  try {
    const apiKey = '43926c40b904d14788c33d11b7d37f5c'; // Your TMDb API key
    const url = `https://api.themoviedb.org/3/search/movie?query=${params}&api_key=${apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      return data;  // Return the movie data
    } else {
      console.log('No results found');
      return { results: [] };  // Return an empty array if no results found
    }
  } catch (error) {
    console.log('Error fetching movie data:', error.message);
    return { results: [] };  // Return an empty array in case of error
  }
};
