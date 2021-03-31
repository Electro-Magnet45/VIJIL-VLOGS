import React, { useEffect } from "react";
import "./css/Home.css";
import VanillaTilt from "vanilla-tilt";

import Header from "../components/Header";

const Home = () => {
  //
  useEffect(() => {
    VanillaTilt.init(
      document.querySelector(".home1-con1-landing1__animeContainer"),
      {
        max: 25,
        speed: 400,
      }
    );
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="home__container">
        {/*====== LANDING =======*/}
        <div className="home1__landingSect">
          <div className="home1-cont1__titleSec">
            <h2>
              The Supreme House of <span>Travelling</span>
            </h2>
          </div>

          <div className="home1-cont1__animeSec">
            <div
              className="home1-con1-landing1__animeContainer"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              data-tilt-scale="1.2"
            >
              <h3 className="home1-con1-landing1__animeContainer__inner">
                Vijil <span>Vlogs</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
