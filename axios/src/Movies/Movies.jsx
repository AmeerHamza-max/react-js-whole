import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Movies.css'; // Import the CSS file

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '43926c40b904d14788c33d11b7d37f5c'; // Your TMDb API key
      const url = `https://api.themoviedb.org/3/search/movie?query=batman&api_key=${apiKey}`;

      try {
        const res = await axios.get(url);
        setMovies(res.data.results); // Accessing 'results' instead of 'Search'
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      
      {error && <p className="error">Error: {error}</p>}
      <div className="movies-grid">
        {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // Movie poster
                alt={movie.title}
                className="movie-poster"
              />
            ) : (
              <div className="no-image">No Image Available</div> // Fallback for missing posters
            )}
            <div className="movie-overlay">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-overview">
                {movie.overview
                  ? movie.overview.substring(0, 120) + '...'
                  : 'No description available.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
