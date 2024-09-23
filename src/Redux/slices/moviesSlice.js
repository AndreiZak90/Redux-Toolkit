import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "64405bd2"; // Не забудьте заменить на ваш ключ

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );
    return response.data.Search;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesAll: [],
    moviesFavorite: [],
    loading: false,
    error: null,
  },
  reducers: {
    addMovie(state, action) {
      if (state.moviesFavorite.includes(action.payload)) return;
      state.moviesFavorite.push(action.payload);
    },
    delMovie(state, action) {
      console.log(action.payload);
      const newState = state.moviesFavorite.filter(
        (item) => item.imdbID !== action.payload
      );
      state.moviesFavorite = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesAll = action.payload || [];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addMovie, delMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
