import { createSlice } from "@reduxjs/toolkit";

export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    increment: (state, action) => {
      if (state.videos[0]) {
        const oldArray = state.videos;
        const newArray = action.payload;

        state.videos = oldArray.concat(newArray);
      } else {
        state.videos = action.payload;
      }
    },
  },
});

export const { increment } = videosSlice.actions;

export default videosSlice.reducer;
