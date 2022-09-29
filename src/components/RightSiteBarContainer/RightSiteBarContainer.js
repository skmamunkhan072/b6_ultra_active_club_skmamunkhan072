import React from "react";
import AddaBrack from "../AddaBrack/AddaBrack";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = () => {
  return (
    <div className="right_sit_Container  px-5">
      <Profile></Profile>
      <AddaBrack></AddaBrack>
      <ExerciseDetails></ExerciseDetails>
    </div>
  );
};

export default RightSiteBarContainer;
