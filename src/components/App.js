import React from "react";
import Hero from "./Hero";
import ImageContainerRight from "./ImageContainerRight";
import ImageContainerLeft from "./ImageContainerLeft";
import ImageContainerBoth from "./ImageContainerBoth";
import Testimonials from "./Testimonials";
import ImageFlex from "./ImageFlex";
import stylesheet from "../css/stylesheet.css";

const App = () => {
  return (
    <div>
      <Hero />
      <ImageContainerRight />
      <ImageContainerLeft />
      <ImageContainerBoth />
      <Testimonials />
      <ImageFlex />
    </div>
  );
};

export default App;
