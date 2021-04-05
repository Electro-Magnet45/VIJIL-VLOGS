import React, { useEffect } from "react";
import "./App.css";

import ScrollToTop from "./ScrollToTop";
import Home from "./screens/Home";
import VideosScreen from "./screens/VideosScreen";

import fetchAllVideos from "./fetch";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/videosSlice";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //
  const querySkip = useSelector((state) => state.query.skip);

  const dispatch = useDispatch();

  const getFetchAllVideos = async (skip) => {
    try {
      const videos = await fetchAllVideos(skip);
      dispatch(increment(videos));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFetchAllVideos(querySkip);
  }, [querySkip]);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/all-videos">
            <VideosScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
