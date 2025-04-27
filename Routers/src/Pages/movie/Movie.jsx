import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card'; // Make sure the path is correct to Card component

const Movie = () => {
  const moviesData = useLoaderData(); // Fetch movie data using the loader

  return (
    <div style={movieContainerStyle}>
      {moviesData.results.map((curMovie) => (
        <Card key={curMovie.id} curMovie={curMovie} />
      ))}
    </div>
  );
};

// Optional: Styling for the container of cards
const movieContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px',
};

export default Movie;
