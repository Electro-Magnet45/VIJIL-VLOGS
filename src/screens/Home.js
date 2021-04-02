import React, { useEffect, useState } from "react";
import "./css/Home.css";
import VanillaTilt from "vanilla-tilt";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  //
  const [isPreloader, setIsPreloader] = useState(true);
  const [isPhone, setIsPhone] = useState(undefined);

  useEffect(() => {
    VanillaTilt.init(
      document.querySelector(".home1-preloader-1__animeContainer"),
      {
        max: 25,
        speed: 400,
      }
    );

    var readyStateCheckInterval = setInterval(function () {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setIsPhone(true);
      } else {
        if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          setTimeout(() => {
            setIsPreloader(false);
          }, 2000);
        }
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
            {isPhone && (
              <h1>
                Sorry Mobile Site is <br /> Under Development{" "}
              </h1>
            )}
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
              title="Latest Video"
              src={"https://www.youtube.com/embed/c2zmqwlhNH0"}
            ></iframe>
          </div>

          <div className="home1__videoSec__divider">
            <div className="home1__videoSec1__container"></div>
          </div>

          <div className="home1__restSection">
            <div className="home1__cont2__videosDiv">
              <div className="home1__cont3__videoContainer">
                <div className="home1__cont4__newReleaseSec">
                  <div className="home1__cont5__titleSec">
                    <h2>New Release</h2>

                    <div className="home1__cont5__videoSec">
                      <div className="home1__cont5__video"></div>
                      <div className="home1__cont5__video"></div>
                      <div className="home1__cont5__video"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home1__cont2__moreDiv">
              <div className="home1__cont3__container">
                <h3>Find Out Even More {"->"} </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isPreloader && <Footer />}
    </div>
  );
};

export default Home;
