import React, { useEffect } from "react";
import "./css/VideosScreen.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { querySkipIncrement } from "../redux/querySlice";

const VideoItem = ({ name, link }) => {
  return (
    <div className="videoItem">
      <div className="videoItem__header">
        <h2>{name}</h2>
      </div>

      <div className="videoItem__videoSec">
        <iframe
          className="videoItem_2__video"
          title={name}
          src={link}
          loading="lazy"
        />
      </div>

      <div className="videoItem__divider"></div>
    </div>
  );
};

const VideosScreen = () => {
  //
  const videos = useSelector((state) => state.videos.videos);
  const querySkip = useSelector((state) => state.query.skip);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <div className="videosScreen">
      <Header />

      <div className="videosScreen__container">
        <div className="videosScreen_1__landingSec">
          <div className="videosScreen_1_1__titleSec">
            <h2>Categories</h2>
          </div>

          <div className="videosScreen_1_1__linksSection">
            <button>{"Tag1"}</button>
            <button>{"Tag2"}</button>
            <button>{"Tag3"}</button>
            <button>{"Tag4"}</button>
            <button>{"Tag5"}</button>
            <button>{"Tag6"}</button>
            <button>{"Tag7"}</button>
            <button>{"Tag8"}</button>
            <button>{"Tag9"}</button>
            <button>{"Tag10"}</button>
          </div>

          <div className="videosScreen_1_1__loadMoreSec">
            <button>Load More</button>
          </div>
        </div>

        <div className="videosScreen_1__divider"></div>

        <div className="videosScreen_1__exploreSec">
          <h3>Explore</h3>

          <div className="videosScreen_1_2__videosSec">
            {videos[0]
              ? videos.map((video) => {
                  return (
                    <VideoItem
                      key={video.id}
                      name={video.name}
                      link={video.link}
                    />
                  );
                })
              : null}
          </div>

          <div className="videosScreen_1_2__moreButton">
            <button onClick={() => dispatch(querySkipIncrement(querySkip + 5))}>
              Load More
            </button>
          </div>
        </div>
      </div>

      <div className="videosScreen__divider"></div>

      <Footer />
    </div>
  );
};

export default VideosScreen;
