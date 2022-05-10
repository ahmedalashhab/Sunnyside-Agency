import React from "react";
import stand from "../images/desktop/image-stand-out.jpg";

const ImageContainerLeft = () => {
  return (
    <div>
      <div className="imageGrid">
        <div>
          <img alt="egg" src={stand} />
        </div>
        <div className="contentBox">
          <div className="box">
            <h3>Stand out to the right audience</h3>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="#" className="learnMoreRed red">
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainerLeft;
