import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MoviePlayer from "./components/MoviePlayer";
import Filters from "./components/Filters";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSelectMovie = (moviePath) => {
    setSelectedMovie(moviePath);
  };

  const handleFilter = (filterText) => {
    setFilter(filterText);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Browser</h1>
      <Filters onFilter={handleFilter} />
      <MovieList onSelect={handleSelectMovie} />
      <MoviePlayer moviePath={selectedMovie} />
    </div>
  );
};

export default App;
