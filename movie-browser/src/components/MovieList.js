import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Grid, Button } from "@mui/material";

const MovieList = ({ onSelect }) => {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} key={movie.path}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150" // Placeholder for movie thumbnail
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onSelect(movie.path)}
              >
                Play
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
