import React, { useEffect } from "react";
import "./App.css";

import Home from "./screens/Home";

import fetchAllVideos from "./fetch";

import { useDispatch } from "react-redux";
import { increment } from "./redux/videosSlice";

function App() {
  //
  const dispatch = useDispatch();

  const getFetchAllVideos = async () => {
    try {
      const videos = await fetchAllVideos();
      dispatch(increment(videos));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFetchAllVideos();
  }, []);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
