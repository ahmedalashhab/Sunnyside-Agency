import React from "react";
import milk from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import sugar from "../images/desktop/image-gallery-sugarcubes.jpg";

const ImageFlex = () => {
  return (
    <div className="galleryContainer">
      <div className="gallery">
        <div>
          <img alt="milk bottles" src={milk} />
        </div>
        <div>
          <img alt="citrus in a bowl" src={orange} />
        </div>
        <div>
          <img alt="empty ice-cream cone" src={cone} />
        </div>
        <div>
          <img alt="sugar cubes" src={sugar} />
        </div>
      </div>
    </div>
  );
};

export default ImageFlex;
