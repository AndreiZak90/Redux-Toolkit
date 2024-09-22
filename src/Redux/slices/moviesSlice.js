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
      state.moviesFavorite.push(action.payload);
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

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
