import { useEffect, useState } from "react";
import {  SetLocalStorage } from "../../utilitis/utilitis";
import AddaBrack from "../AddaBrack/AddaBrack";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = ({requiredTime}) => {
  let localStItems = 0;
  const exerciseText = document.getElementById('Exercise_seconds');
  const [exercisSeconds, setExerciseText] = useState(0)
  const addToSeconds = e =>{
    const targetValue = e?.target.innerText
    const exerciseConNumber = parseFloat(exerciseText.innerText)
    if(targetValue !== 's'){
      const secondsConNumber = parseFloat(targetValue)
      const total = exerciseConNumber + secondsConNumber
      exerciseText.innerText = total
    const getLocalValue = SetLocalStorage(total,exerciseText)

  }
}
useEffect(()=>{
const localStValue = localStorage.getItem("Exercise_Seconds")
const localValueConNumber = parseFloat(localStValue)
if(localValueConNumber){
  setExerciseText(localStValue)
}else{
  localStorage.setItem("Exercise_Seconds",localStItems )
  setExerciseText(localStValue)
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
