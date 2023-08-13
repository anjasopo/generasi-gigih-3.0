import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Tahun: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}

export default MovieCard;
