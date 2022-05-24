import React from "react";
import image from "../../Assets/mission.jpg";
import "./Mission.scss";

const Mission = () => {
  return (
    <div className="MissionContainer">
      <div className="MissionRow">
        <div className=" MissionLeft">
          <img className="w-100" src={image} alt="" />
        </div>
        <div className=" MissionRight">
          <h2>Mission</h2>
          <p>
            We target changing the digital experience of our clients into
            financially savvy, practical, client driven and imaginative
            specialized arrangements. Trackon Canada perceives and adjusts
            rapidly to the changing digital landscape along these lines engaging
            clients to inspire their presence on the lookout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
