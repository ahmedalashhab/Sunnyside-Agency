import React from "react";
import arrowDown from "../images/icon-arrow-down.svg";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="width">
      <div className="imageHeader">
        <Nav />
        <div className="title">
          <div className="headerContainer">
            <h2>We are creatives</h2>
            <div className="arrowDownContainer">
              <img alt="arrow down" src={arrowDown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
