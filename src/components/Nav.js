import React from "react";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <div>
      <nav className="menu">
        <h1>
          <img alt="Sunnyside logo" src={logo} />
        </h1>
        <div>
          <ul className="links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="button">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
