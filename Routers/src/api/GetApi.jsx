// Fetch movie data using TMDb API
export const getApiData = async () => {
    try {
      const apiKey = '43926c40b904d14788c33d11b7d37f5c'; // Your TMDb API key
      const url = `https://api.themoviedb.org/3/search/movie?query=batman&api_key=${apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        return data;  // Return the movie data
      } else {
        console.log('No results found');
        return { results: [] };  // Return an empty array if no results found
      }
    } catch (error) {
      console.log('Error fetching movie data', error);
      return { results: [] };  // Return an empty array in case of error
    }
  };
  