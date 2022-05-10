import React from "react";
import blonde from "../images/image-emily.jpg";
import man from "../images/image-thomas.jpg";
import short from "../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonialTitleContainer">
        <div className="testimonialTitle">Client testimonials</div>
      </div>
      <div className="totalTestimonialContainer">
        <div className="testimonialPeopleContainer">
          <div className="col">
            <div className="picContainer">
              <img alt="woman staring off camera" src={blonde} />
            </div>
            <div className="quoteHolder">
              <p className="quote">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div className="name">Emily R.</div>
              <div className="job">Marketing Director</div>
            </div>
          </div>
          <div className="col">
            <div className="picContainer">
              <img alt="man smiling at camera" src={man} />
            </div>
            <div className="quoteHolder">
              <p className="quote">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <div className="name"> Thomas S.</div>
              <div className="job">Chief Operating Officer</div>
            </div>
          </div>
          <div className="col">
            <div className="picContainer">
              <img alt="lady smiling at camera" src={short} />
            </div>
            <div className="quoteHolder">
              <p className="quote">
                {" "}
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div className="name">Jennie F.</div>
              <div className="job"> Business Owner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
