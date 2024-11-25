import React from "react";

const MoviePlayer = ({ moviePath }) => {
  if (!moviePath) return <p style={{ textAlign: "center" }}>Please select a movie to play!</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        controls
        style={{ width: "80%", maxWidth: "800px", borderRadius: "8px" }}
        src={`http://localhost:8080/movies/play?path=${encodeURIComponent(moviePath)}`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MoviePlayer;
