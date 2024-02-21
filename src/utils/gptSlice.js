import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggoleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggoleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;
