import React from "react";

const MoviePlayer = ({ moviePath }) => {
  if (!moviePath) return <div>Please select a movie to play!</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <video
        controls
        width="800"
        src={`http://localhost:8080/movies/play?path=${encodeURIComponent(moviePath)}`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MoviePlayer;
