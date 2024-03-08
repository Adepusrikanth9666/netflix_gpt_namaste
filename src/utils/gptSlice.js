import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGPTSearch: false,
    movienames: null,
    movieResults: null,
    isGptMovieDataError: false,
    isLoadingGpt: false,
  },
  reducers: {
    toggoleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movienames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movienames = movienames;
    },
    gptMovieDataError: (state, action) => {
      state.isGptMovieDataError = action.payload;
    },
    gptLoading: (state, action) => {
      state.isLoadingGpt = action.payload;
    },
  },
});

export const {
  toggoleGPTSearchView,
  addGPTMovieResult,
  gptMovieDataError,
  gptLoading,
} = gptSlice.actions;

export default gptSlice.reducer;
