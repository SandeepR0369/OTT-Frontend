import React, { useEffect, useState } from "react";
import "../styles/LandingPage.css";
import { getMovies, getMovieStreamURL } from "../api";

const LandingPage = () => {
  const [movies, setMovies] = useState([]); // State to hold movies
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for handling errors
  const [selectedMovie, setSelectedMovie] = useState(null); // State for popup movie

  // Fetch movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(); // Fetch movies from API
        setMovies(data); // Set movies in state
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again later."); // Set error message
      } finally {
        setIsLoading(false); // Loading is complete
      }
    };

    fetchMovies();
  }, []);

  // Handle movie click to show modal
  const handlePlayMovie = (movie) => {
    setSelectedMovie(movie); // Set selected movie for modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedMovie(null); // Clear selected movie
  };

  return (
    <div className="landing-container">
      {/* Title */}
      <h1 className="title">Sandeep Flix</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title, genre, or language..."
          className="search-input"
        />
        <button className="search-button">Apply Filter</button>
      </div>

      {/* Movies List or Loading/Error */}
      {error ? (
        <p className="error-message">{error}</p>
      ) : isLoading ? (
        <p className="loading-text">Loading movies...</p>
      ) : (
        <div className="movies-list">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div
                key={index}
                className="movie-card"
                role="button"
                aria-label={`Play ${movie.title}`}
                onClick={() => handlePlayMovie(movie)}
              >
                <img
                  src={movie.image || "/placeholder.jpg"}
                  alt={`Poster of ${movie.title}`}
                  className="movie-poster"
                />
                <h3>{movie.title || "Untitled"}</h3>
                <p>
                  Genre: {movie.genre || "N/A"} <br />
                  Language: {movie.language || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p className="loading-text">No movies available.</p>
          )}
        </div>
      )}

      {/* Modal Section */}
      {selectedMovie && (
        <div className="movie-popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
            <video
              id="moviePlayer"
              src={getMovieStreamURL(selectedMovie.path)}
              controls
              autoPlay
              className="movie-player"
            />
            <div className="video-controls">
              <button
                className="control-button"
                onClick={() => {
                  const video = document.getElementById("moviePlayer");
                  video.currentTime = Math.max(0, video.currentTime - 30); // 30s backward
                }}
              >
                -30s
              </button>
              <button
                className="control-button"
                onClick={() => {
                  const video = document.getElementById("moviePlayer");
                  video.currentTime = Math.min(
                    video.duration,
                    video.currentTime + 30
                  ); // 30s forward
                }}
              >
                +30s
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;



// import React from 'react';
// import '../styles/LandingPage.css'; // Importing the associated CSS for styling

// const LandingPage = () => {
//   return (
//     <div className="landing-container"> {/* Container styled in CSS */}
//       <div className="logo-container"> {/* Logo section */}
//         <img src="/logo.png" alt="Sandeep Flix Logo" className="logo" /> {/* Logo image */}
//       </div>
//       <div className="signin-form"> {/* Sign-in form section */}
//         <h1 className="form-title">Sign In</h1> {/* Title */}
//         <button className="sign-in-btn">Sign In</button> {/* Sign-in button */}
//         <div className="additional-options">
//           <span className="forgot-password">Forgot Password?</span> {/* Forgot password link */}
//         </div>
//         <div className="signup-link"> {/* Sign-up link */}
//           <a href="/signup">Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


// import React from "react";
// import "../styles/LandingPage.css"; // Import CSS for styling

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       {/* Logo */}
//       <div className="logo-container">
//         <img src="/logo.png" alt="Sandeep Flix Logo" className="logo" />
//       </div>

//       {/* Sign-In Form */}
//       <div className="signin-form">
//         <h2 className="form-title">Sign In</h2>
//         <input
//           type="text"
//           placeholder="Email or mobile number"
//           className="input-field"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="input-field"
//         />
//         <button className="sign-in-btn">Sign In</button>
//         <p className="forgot-password">Forgot password?</p>
//         <p className="signup-link">
//           New to Sandeep Flix? <a href="#signup">Sign up now.</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
