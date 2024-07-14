// src/components/MovieDetail.js
import React from 'react';
import '../styles.css';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
