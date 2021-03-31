import React, { useEffect, useState } from "react";
import "./css/Home.css";
import VanillaTilt from "vanilla-tilt";

import Header from "../components/Header";

const Home = () => {
  //
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    VanillaTilt.init(
      document.querySelector(".home1-preloader-1__animeContainer"),
      {
        max: 25,
        speed: 400,
      }
    );

    var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        setTimeout(() => {
          setIsPreloader(false);
        }, 2000);
      }
    }, 10);
  }, []);

  useEffect(() => {
    if (!isPreloader) {
      setInterval(() => {
        if (
          document.getElementById("home1-cont-1-landing-1__span").innerText ===
          "Food"
        ) {
          document.getElementById(
            "home1-cont-1-landing-1__span"
          ).style.opacity = "0";
          setTimeout(() => {
            document.getElementById("home1-cont-1-landing-1__span").innerText =
              "Travelling";
            document.getElementById(
              "home1-cont-1-landing-1__span"
            ).style.opacity = "1";
          }, 1000);
        } else {
          if (
            document.getElementById("home1-cont-1-landing-1__span")
              .innerText === "Travelling"
          ) {
            document.getElementById(
              "home1-cont-1-landing-1__span"
            ).style.opacity = "0";
            setTimeout(() => {
              document.getElementById(
                "home1-cont-1-landing-1__span"
              ).innerText = "Unboxing";
              document.getElementById(
                "home1-cont-1-landing-1__span"
              ).style.opacity = "1";
            }, 1000);
          } else {
            if (
              (document.getElementById(
                "home1-cont-1-landing-1__span"
              ).innerText = "Unboxing")
            ) {
              document.getElementById(
                "home1-cont-1-landing-1__span"
              ).style.opacity = "0";
              setTimeout(() => {
                document.getElementById(
                  "home1-cont-1-landing-1__span"
                ).innerText = "Food";
                document.getElementById(
                  "home1-cont-1-landing-1__span"
                ).style.opacity = "1";
              }, 1000);
            }
          }
        }
      }, 2000);
    }
  }, [isPreloader]);

  return (
    <div className="home">
      {isPreloader && (
        <div className="home__preloader">
          <div className="home-1__container">
            <div
              className="home1-preloader-1__animeContainer"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              data-tilt-scale="1.2"
            >
              <h3 className="home1-preloader-1__animeContainer__inner">
                Vijil <span>Vlogs</span>
              </h3>
            </div>
          </div>
        </div>
      )}
      {!isPreloader && <Header />}
      {!isPreloader && (
        <div className="home__container">
          {/*====== LANDING =======*/}
          <div className="home1__landingSect">
            <div className="home1-cont-1__titleSec">
              <h3>
                #1 QUICK <span id="home1-cont-1-landing-1__span">FOOD</span>{" "}
                VIDEO CHANNEL
              </h3>
              <h1>
                RECIPE OF
                <br /> THE TIME
              </h1>
            </div>
          </div>
          <div className="home1__videoSec">
            <iframe
              width="810"
              height="455"
              src="https://www.youtube.com/embed/c2zmqwlhNH0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
