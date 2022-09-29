import React from "react";
import AddaBrack from "../AddaBrack/AddaBrack";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = () => {
  return (
    <div className="right_sit_Container border-2 px-5">
      <Profile></Profile>
      <AddaBrack></AddaBrack>
      <h2>Right sitebar</h2>
    </div>
  );
};

export default RightSiteBarContainer;
