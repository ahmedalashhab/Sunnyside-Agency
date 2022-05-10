import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import ImageContainerRight from "./ImageContainerRight";
import ImageContainerLeft from "./ImageContainerLeft";
import ImageContainerBoth from "./ImageContainerBoth";
import ImageFlex from "./ImageFlex";
import stylesheet from "../css/stylesheet.css";

const App = () => {
  return (
    <div>
      <Hero />
      <ImageContainerRight />
      <ImageContainerLeft />
      <ImageContainerBoth />
    </div>
  );
};

export default App;
