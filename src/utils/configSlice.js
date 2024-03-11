import { createSlice } from "@reduxjs/toolkit";
import { OPENAI_KEY } from "./constants";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "english",
    userApiKey: "",
  },
  reducers: {
    changeLangauge: (state, action) => {
      state.lang = action.payload;
    },
    userEnterApiKey: (state, action) => {
      state.userApiKey = action.payload;
    },
  },
});

export const { changeLangauge, userEnterApiKey } = configSlice.actions;
export default configSlice.reducer;
