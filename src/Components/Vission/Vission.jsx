import React from "react";
import image from "../../Assets/vision.jpg";
import "./Vision.scss";

const Vission = () => {
  return (
    <div className="VisionContainer">
      <div className="VisionRow">
        <div className="VisionLeft">
          <h2>Vision</h2>
          <p>
            We envision turning into a worldwide leader in reevaluating and
            offshoring technological solutions. Our eye into the subtleties,
            quality confirmation and fastidious determination of ability will
            assist organizations with advancing into productive resources.
          </p>
        </div>
        <div className="VisionRight">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vission;
