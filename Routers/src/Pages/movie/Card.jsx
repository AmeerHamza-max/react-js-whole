import React from 'react';
import './Card.css'; // Import the CSS file
import { NavLink } from 'react-router';

// Card component to display individual movie details
const Card = ({ curMovie, }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w500${curMovie.poster_path}`}
          alt={curMovie.title}
        />
      </div>
      <div className="card-text">
        <h3>{curMovie.title}</h3>
        <p>{curMovie.release_date}</p>

        <p>{curMovie.overview}</p>
        <NavLink to={`/movie/${curMovie.id}`}>
        <button>Watch Now</button>
        </NavLink>
       
      </div>
    </div>
  );
};

export default Card;
