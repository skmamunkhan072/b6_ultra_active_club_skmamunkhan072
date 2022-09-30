import React, { useEffect, useState } from "react";
import CardWraperContainer from "../CardWraperContainer/CardWraperContainer";
import RightSiteBarContainer from "../RightSiteBarContainer/RightSiteBarContainer";
import "./WebBody.css";

const WebBody = () => {
  const requiredTimeString = document.getElementById("requiredTime")
  const [datas, setDatas] = useState([]);
  const [requiredTime, setRequiredTime] = useState(0)
  useEffect(() => {
    fetch(`Fackdb.json`)
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  const cardButn = (id, difolt) =>{
  const card =   datas.find((data) => data.id === id)
  const {time} = card

  if(requiredTimeString.innerText === "0"){
    console.log("soman na");
    setRequiredTime(time)
  }
  if(requiredTimeString.innerText){
    const requiredTimeContNum = parseFloat(requiredTimeString.innerText)
    const totalrequiredTime =  requiredTimeContNum + time
    setRequiredTime(totalrequiredTime);
  }
  }

  return (
    <div className="web_body grid">
      <CardWraperContainer cardButn={cardButn} datas={datas}></CardWraperContainer>
      <RightSiteBarContainer requiredTime={requiredTime}></RightSiteBarContainer>
    </div>
  );
};

export default WebBody;
