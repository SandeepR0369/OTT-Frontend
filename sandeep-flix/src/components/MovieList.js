import React, { useEffect, useState } from "react";
import { getMovies } from "../api"; // Fetch movies from backend

const MovieList = ({ onSelect }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies when component loads
    const fetchMovies = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            width: "200px",
          }}
          onClick={() => onSelect(movie.path)}
        >
          <img
            src="https://via.placeholder.com/200x300" // Placeholder image
            alt={movie.title}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>{movie.title}</h3>
          <p style={{ margin: "5px 0" }}>Genre: {movie.genre}</p>
          <p style={{ margin: "5px 0" }}>Language: {movie.language}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
