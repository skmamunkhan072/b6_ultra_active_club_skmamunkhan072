import React from "react";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = () => {
  return (
    <div className="right_sit_Container border-2">
      <Profile></Profile>
      <h2>Right sitebar</h2>
    </div>
  );
};

export default RightSiteBarContainer;
