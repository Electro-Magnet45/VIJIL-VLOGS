import React, { useEffect, useState } from "react";
import "./css/VideoItemScreen.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Skeleton from "react-loading-skeleton";

import { fetchById } from "../fetch";

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const VideoItemScreen = () => {
  //
  var location = useLocation();

  const [item, setItem] = useState(null);
  const [tags, setTags] = useState(null);

  const fetchItemById = async (itemId) => {
    try {
      const item = await fetchById(itemId);
      setItem(item);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    var itemId = location.pathname.substr(7);
    setTimeout(() => {
      fetchItemById(itemId);
    }, 1000);
  }, []);

  useEffect(() => {
    if (item) {
      for (var i = 0; i < item.tags.length; i++) {
        item.tags[i] = "#" + item.tags[i];
      }
      setTags(item.tags);
    }
  }, [item]);

  return (
    <div className="videoItemScreen">
      <Helmet>{item && <title>{item.name} | Vijil-Vlogs</title>}</Helmet>

      <Header />

      <div className="videoItemScreen__container">
        <div className="videoItemScreen_1__div">
          <div className="videoItemScreen__1_1_videoSec">
            {item ? (
              <iframe
                title={item.name}
                src={item.link}
                loading="lazy"
                frameBorder="0"
              />
            ) : (
              <Skeleton className="videoItemScreen__1_1_videoSec_loader" />
            )}
          </div>

          <div className="videoItemScreen__1_1_infoSec">
            <div className="videoItemScreen_1_1_2__container">
              <div className="videoItemScreen_1_1_2__div">
                {item ? (
                  <h2>{item.name}</h2>
                ) : (
                  <Skeleton className="videoItemScreen_1_1_3__title_loader" />
                )}
                {item ? (
                  <h4>{item.description}</h4>
                ) : (
                  <Skeleton className="videoItemScreen_1_1_3__description_loader" />
                )}

                {item ? (
                  <p>
                    {tags &&
                      tags.map((tag) => {
                        return <span key={tag}>{tag} </span>;
                      })}
                  </p>
                ) : (
                  <Skeleton className="videoItemScreen_1_1_3__tag_loader" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoItemScreen__divider"></div>

      <Footer />
    </div>
  );
};

export default VideoItemScreen;
