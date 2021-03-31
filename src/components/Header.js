import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header-1__logoSection">
          <h3>
            Vijil <span>Vlogs</span>
          </h3>
        </div>

        <div className="header-1__navBar">
          <div className="header-1-nav__container fit_self">
            <ul>
              <li>Home</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
