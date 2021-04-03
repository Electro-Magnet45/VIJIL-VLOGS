import { createSlice } from "@reduxjs/toolkit";

export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    increment: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { increment } = videosSlice.actions;

export default videosSlice.reducer;
