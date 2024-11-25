import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import MovieList from "./components/MovieList";
import MoviePlayer from "./components/MoviePlayer";
import Filters from "./components/Filters";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (moviePath) => {
    setSelectedMovie(moviePath);
  };

  return (
    <div>
      <LandingPage />
      <Filters onFilter={() => {}} />
      <MovieList onSelect={handleSelectMovie} />
      {selectedMovie && <MoviePlayer moviePath={selectedMovie} />}
    </div>
  );
};

export default App;
