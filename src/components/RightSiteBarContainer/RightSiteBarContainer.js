import { useEffect, useState } from "react";
import { SetLocalStorage } from "../../utilitis/utilitis";
import AddaBrack from "../AddaBrack/AddaBrack";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = ({ requiredTime }) => {
  let localStItems = "0";
  const exerciseText = document.getElementById("Exercise_seconds");
  const [exercisSeconds, setExerciseText] = useState(0);
  const addToSeconds = (e) => {
    const targetValue = e?.target.innerText;

    // console.log(targetValue);
    if (targetValue.length === 3) {
      const targetValueString = targetValue.slice(0, 2);
      SetLocalStorage(targetValueString);
      setExerciseText(targetValueString);
    } else {
      if (targetValue !== "s") {
        exerciseText.innerText = targetValue;
        SetLocalStorage(targetValue);
        setExerciseText(targetValue);
      }
    }
  };

  useEffect(() => {
    const localStValue = localStorage.getItem("Exercise_Seconds");
    const localValueConNumber = JSON.parse(localStValue);

    if (localValueConNumber) {
      setExerciseText(localValueConNumber);
    } else {
      localStorage.setItem("Exercise_Seconds", JSON.stringify(localStItems));
      setExerciseText(localValueConNumber);
    }
  }, []);

  return (
    <div className="right_sit_Container  px-5">
      <Profile></Profile>
      <AddaBrack addToSeconds={addToSeconds}></AddaBrack>
      <ExerciseDetails
        requiredTime={requiredTime}
        exercisSeconds={exercisSeconds}
      ></ExerciseDetails>
    </div>
  );
};

export default RightSiteBarContainer;
