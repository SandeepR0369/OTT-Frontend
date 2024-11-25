import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Backend URL

// Fetch all movies
export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Get movie streaming URL
export const getMovieStreamURL = (path) => {
  return `${API_BASE_URL}/movies/play?path=${encodeURIComponent(path)}`;
};
