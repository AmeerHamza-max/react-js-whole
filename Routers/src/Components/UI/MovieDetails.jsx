import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams to get the movieID from the URL
import { getDetails } from '../../api/GetMovie'; // Import your getDetails function

const MovieDetails = () => {
  const { movieID } = useParams();  // Get the movieID from the URL
  const [movieDetails, setMovieDetails] = useState(null);  // State to store movie data

  useEffect(() => {
    const fetchMovieDetails = async () => {
      // Fetch movie data based on movieID
      const data = await getDetails(movieID);

      if (data.results && data.results.length > 0) {
        setMovieDetails(data.results[0]);  // Set the fetched movie details to state
      } else {
        setMovieDetails(null);  // If no data, set to null
      }
    };

    fetchMovieDetails();
  }, [movieID]); // Effect will run again if movieID changes

  // Loading state
  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
      <div className="card">
        <div className="card-img-container">
          <img
            className="card-img"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <div className="card-text">
          <h3>{movieDetails.title}</h3>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
