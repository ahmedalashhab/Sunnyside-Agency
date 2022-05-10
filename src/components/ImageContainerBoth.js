import React from "react";
import cherries from "../images/desktop/image-graphic-design.jpg";
import tangerines from "../images/desktop/image-photography.jpg";

const ImageContainerBoth = () => {
  return (
    <div>
      <div className="imageGrid">
        <div className="singleBoxContainer">
          <div className="imageBoxGraphic">
            <div className="textBox">
              <div className="graphicTitle">Graphic Design</div>
              <div className="graphicText">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </div>
            </div>
          </div>
        </div>
        <div className="singleBoxContainer">
          <div className="imageBoxPhoto">
            <div className="textBox">
              <div className="photoTitle">Photography</div>
              <div className="photoText">
                {" "}
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainerBoth;
