import React, { useEffect, useState } from "react";
import "./css/Home.css";
import VanillaTilt from "vanilla-tilt";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UnboxBox from "../components/UnboxBox";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Home = () => {
  //
  var landingSpanIntr;
  var timeout1;
  var timeout2;
  var timeout3;

  const [isPreloader, setIsPreloader] = useState(true);
  const [isPhone, setIsPhone] = useState(undefined);

  const videos = useSelector((state) => state.videos.videos);

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
          if (sessionStorage.getItem("preloaderStatus") !== "close") {
            clearInterval(readyStateCheckInterval);
            setTimeout(() => {
              setIsPreloader(false);
              sessionStorage.setItem("preloaderStatus", "close");
            }, 2000);
          } else {
            setIsPreloader(false);
          }
        }
      }
    }, 10);
  }, []);

  useEffect(() => {
    if (!isPreloader) {
      landingSpanIntr = setInterval(() => {
        if (
          document.getElementById("home1-cont-1-landing-1__span").innerText ===
          "Food"
        ) {
          document.getElementById(
            "home1-cont-1-landing-1__span"
          ).style.opacity = "0";
          timeout1 = setTimeout(() => {
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
            timeout2 = setTimeout(() => {
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
              timeout3 = setTimeout(() => {
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

    return () => {
      clearInterval(landingSpanIntr);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
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
                Sorry Mobile Site is <br /> Under Development
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
                #1 QUICK <span id="home1-cont-1-landing-1__span">FOOD</span>
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
              src={videos[0] && videos[0].link}
              loading="lazy"
            />
          </div>

          <div className="home1__videoSec__divider">
            <div className="home1__videoSec1__container"></div>
          </div>

          <div className="home1__restSection">
            <div className="home1__restSec__foodDiv">
              <div className="home1__restSec_1__container">
                <div className="home1__restSec3__titleDiv">
                  <h1>Food</h1>
                </div>

                <div className="home1__restSec3__contentDiv">
                  <div className="home1__restSec4__quote1">
                    <blockquote>
                      Food for us comes from our relatives, whether they have
                      wings or fins or roots. That is how we consider food. Food
                      has a culture. It has a history. It has a story. It has
                      relationships.
                      <span>Winona LaDuke</span>
                    </blockquote>
                  </div>

                  <h3>
                    We, at Vijil Vlogs, prepare food for <i>Happiness </i>,
                    <i> Love</i>,<i> Care</i> and with <i>Passion</i>.
                  </h3>

                  <div className="home1__restSec4__quote2">
                    <blockquote>
                      So long as you have food in your mouth you have solved all
                      questions for the time being.
                      <span>Franz Kafka</span>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="home1__restSec2__travellingDiv">
              <div className="home1__restSec2_1__container">
                <div className="home1__restSec2_3__titleDiv">
                  <h1>Travelling</h1>
                </div>

                <div className="home1__restSec2_3__contentDiv">
                  <div className="home1__restSec2_4__quote1">
                    <blockquote>
                      Jobs fill your pockets, adventures fill your soul.
                    </blockquote>
                  </div>

                  <h3>
                    We, still, at Vijil Vlogs, introduce new places for
                    <i> Happiness </i>,<i> Love</i>,<i> Care</i> and with
                    <i> Passion</i>.
                  </h3>

                  <div className="home1__restSec2_4__quote2">
                    <blockquote>
                      The world is a book and those who do not travel read only
                      one page
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="home1__restSec2__unBoxingDiv">
              <div className="home1__restSec2_2__contaier">
                <div className="home1__restSec2_2__titleDiv">
                  <h1>Unboxing</h1>
                </div>

                <div className="home1__restSec2_2_3__contentDiv">
                  <h3>
                    We, much still, at Vijil Vlogs, power new products for
                    <i> Happiness </i>,<i> Love</i>,<i> Care</i> and with
                    <i> Passion</i>.
                  </h3>

                  <div className="home1__restSec2_4__unBox">
                    <UnboxBox />
                  </div>
                </div>
              </div>
            </div>

            <div className="home1__cont2__moreDiv">
              <div className="home1__cont3__container">
                <h3>
                  <Link to="/all-videos">Find Out Even More {"->"}</Link>
                </h3>
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
