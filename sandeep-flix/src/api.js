import axios from "axios";

// Base URL for the backend API
const API_BASE_URL = "http://localhost:8080";

// Fetch all available movies
export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    return response.data; // Return the list of movies
  } catch (error) {
    console.error("Error fetching movies from backend:", {
      message: error.message,
      url: `${API_BASE_URL}/movies`,
      status: error.response?.status || "No response",
    });
    throw error; // Re-throw error for handling in the UI
  }
};

// Generate a streaming URL for a specific movie
export const getMovieStreamURL = (path) => {
  return `${API_BASE_URL}/movies/play?path=${encodeURIComponent(path)}`;
};
