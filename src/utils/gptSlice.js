import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGPTSearch: false,
    movienames: null,
    movieResults: null,
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
  },
});

export const { toggoleGPTSearchView, addGPTMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
