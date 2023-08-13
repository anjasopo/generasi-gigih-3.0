import React, { useState } from "react";
import MovieCard from "./MovieCard";
import moviesData from "../data";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  function handleGenreChange(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div>
      <h1>Rekomendasi Film</h1>
      <div>
        <button onClick={() => handleGenreChange("All")}>Semua</button>
        <button onClick={() => handleGenreChange("Horror")}>Horror</button>
        <button onClick={() => handleGenreChange("Comedy")}>Comedy</button>
      </div>
      <div className="movie-list">
        {moviesData
          .filter((movie) => selectedGenre === "All" || movie.genre === selectedGenre)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;
