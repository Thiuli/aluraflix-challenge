// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import api from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="home">
      <h2>Featured Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
