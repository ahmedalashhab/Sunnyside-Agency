import React from "react";
import egg from "../images/desktop/image-transform.jpg";

const ImageContainerRight = () => {
  return (
    <div>
      <div className="imageGrid">
        <div className="contentBox">
          <div className="box">
            <h3>Transform your brand</h3>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#" className="learnMoreYellow yellow">
              learn more
            </a>
          </div>
        </div>
        <div>
          <img alt="egg" src={egg} />
        </div>
      </div>
    </div>
  );
};

export default ImageContainerRight;
