import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice";
import queryReducer from "./querySlice";

export default configureStore({
  reducer: {
    videos: videosReducer,
    query: queryReducer,
  },
});
