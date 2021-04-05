import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header-1__logoSection">
          <h3>
            <Link to="/">
              Vijil <span>Vlogs</span>
            </Link>
          </h3>
        </div>

        <div className="header-1__navBar">
          <div className="header-1-nav__container fit_self">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
