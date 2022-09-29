import React from "react";
import "./ExerciseDetails.css";
const ExerciseDetails = () => {
  const newSeconds = localStorage.getItem("addBrackSecond");
  console.log(newSeconds);
  return (
    <div>
      <h1 className="my-6 text-xl">Exercise Details</h1>
      <div className="exercise_time_container">
        <div className="exercise_time_wraper flex justify-between items-center flex-wrap">
          <p>Exercise time</p>
          <p className="seconds">200 seconds</p>
        </div>
        <div className="exercise_time_wraper flex justify-between items-center flex-wrap">
          <p>Break time</p>
          <p className="seconds">15 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
