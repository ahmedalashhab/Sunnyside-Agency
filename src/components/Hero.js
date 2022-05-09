import React from "react";
import arrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div>
      <div className="imageHeader">
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
