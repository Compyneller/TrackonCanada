import React from "react";
import image from "../../Assets/jason-goodman-Oalh2MojUuk-unsplash.jpg";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <div className="row">
        <div
          className="col-12 col-lg-2 AboutLeft"
          style={{ background: "#F5822F" }}
        >
          <h2>About Us</h2>
        </div>
        <div className="col-12 col-lg-8 AboutMid">
          <p>
            Trackon Canada is a developing & leading software development
            company known for its highly effective & innovative digital
            solutions that helps in evolving a brand, business or application.
            We provide you exceptional insight of your customers that helps you
            to expand your web & mobile application customer base. Our
            highly-qualified & skilled team makes sure to properly analyze &
            implement techniques that help you to generate revenue & build a
            strong community of customers with potential engagement. We have
            entered with a vision to become a top-leading company that provides
            technical solutions with quality assurance & meticulous selection of
            talents that will help business to evolve profitable assets. We are
            on a mission to transform the understanding & experience of the
            customers into cost effective, functional, user-centric and
            innovative technical solutions. We believe in empowering clients to
            uplift their presence in the market.
          </p>
        </div>
        <div className="col-12 col-lg-2 AboutRight"></div>
      </div>
    </div>
  );
};

export default AboutUs;
