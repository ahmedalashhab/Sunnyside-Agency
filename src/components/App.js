import React from "react";
import Hero from "./Hero";
import ImageContainerRight from "./ImageContainerRight";
import ImageContainerLeft from "./ImageContainerLeft";
import ImageContainerBoth from "./ImageContainerBoth";
import Testimonials from "./Testimonials";
import ImageFlex from "./ImageFlex";
import Footer from './Footer'
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
      <Footer/>
    </div>
  );
};

export default App;
