import { useEffect, useState } from "react";
import {  SetLocalStorage } from "../../utilitis/utilitis";
import AddaBrack from "../AddaBrack/AddaBrack";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Profile from "../Profile/Profile";
import "./RightSiteBarContainer.css";

const RightSiteBarContainer = () => {
  let localStItems = 0;
  const brackText = document.getElementById('brack_seconds');
  const [bracksecond, setBrackText] = useState(0)

  const addToSeconds = e =>{
    const targetValue = e?.target.innerText
    const brackConNumber = parseFloat(brackText.innerText)
    if(targetValue !== 's'){
      const secondsConNumber = parseFloat(targetValue)
      const total = brackConNumber + secondsConNumber
      brackText.innerText = total
    const getLocalValue = SetLocalStorage(total, brackText)

  }
}
useEffect(()=>{
const localStValue = localStorage.getItem("Brack_Seconds")
const localValueConNumber = parseFloat(localStValue)
if(localValueConNumber){
  setBrackText(localStValue)
}else{
  localStorage.setItem("Brack_Seconds",localStItems )
  console.log( localValueConNumber);
  setBrackText(localStValue)
}
},[])


  return (
    <div className="right_sit_Container  px-5">
      <Profile></Profile>
      <AddaBrack addToSeconds={addToSeconds}></AddaBrack>
      <ExerciseDetails bracksecond={bracksecond}></ExerciseDetails>
    </div>
  );
};

export default RightSiteBarContainer;
