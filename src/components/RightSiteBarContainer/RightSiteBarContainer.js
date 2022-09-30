import { useEffect, useState } from "react";
import {  SetLocalStorage } from "../../utilitis/utilitis";
import AddaBrack from "../AddaBrack/AddaBrack";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = ({requiredTime}) => {
  let localStItems = "0";
  const exerciseText = document.getElementById('Exercise_seconds');
  const [exercisSeconds, setExerciseText] = useState(0)
  const addToSeconds = e =>{
    const targetValue = e?.target.innerText
    if(targetValue !== 's'){

      // const total = exerciseConNumber + secondsConNumber
      exerciseText.innerText = targetValue
    const getLocalValue = SetLocalStorage(targetValue)

  }
}
useEffect(()=>{
const localStValue = localStorage.getItem("Exercise_Seconds")
const localValueConNumber = JSON.parse(localStValue)
if(localValueConNumber){
  setExerciseText(localValueConNumber)
}else{
  localStorage.setItem("Exercise_Seconds",JSON.stringify(localStItems) )
  setExerciseText(localValueConNumber)
}
},[])


  return (
    <div className="right_sit_Container  px-5">
      <Profile></Profile>
      <AddaBrack addToSeconds={addToSeconds}></AddaBrack>
      <ExerciseDetails requiredTime={requiredTime} exercisSeconds={exercisSeconds}></ExerciseDetails>

    </div>
  );
};

export default RightSiteBarContainer;
