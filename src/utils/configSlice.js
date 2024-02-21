import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "english",
  },
  reducers: {
    changeLangauge: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLangauge } = configSlice.actions;
export default configSlice.reducer;
