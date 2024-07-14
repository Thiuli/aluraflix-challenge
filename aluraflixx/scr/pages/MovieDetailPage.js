// src/pages/MovieDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import api from '../services/api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.get(`/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  return (
    <div className="movie-detail-page">
      {movie ? <MovieDetail movie={movie} /> : <p>Loading...</p>}
    </div>
  );
};

export default MovieDetailPage;
