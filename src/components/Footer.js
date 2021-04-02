import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer1__logoSec">
          <h3>
            Vijil
            <br />
            <span>Vlogs</span>
          </h3>
        </div>

        <div className="footer1__divider"></div>

        <div className="footer1__formSec">
          <div className="footer1_formContainer">
            <h3>Subscribe for More </h3>
            <input type="text" placeholder="Enter Your Email" />
          </div>

          <div className="footer1__socialSec">
            <div
              className="wrapper"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCbXkfg6pzGcPdU6Y8vpRPqg",
                  "_blank"
                )
              }
            >
              <div className="button">
                <div className="icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <span>YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__base">
        <h5>2020 Vijil Vlogs</h5>
      </div>
    </div>
  );
};

export default Footer;
