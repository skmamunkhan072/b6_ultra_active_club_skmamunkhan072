import React, { useEffect, useState } from "react";
import CardWraperContainer from "../CardWraperContainer/CardWraperContainer";
import RightSiteBarContainer from "../RightSiteBarContainer/RightSiteBarContainer";
import "./WebBody.css";

const WebBody = () => {
  const requiredTimeString = document.getElementById("requiredTime");
  const [datas, setDatas] = useState([]);
  const [requiredTime, setRequiredTime] = useState(0);
  useEffect(() => {
    fetch(`Fackdb.json`)
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  const cardButn = (id, difolt) => {
    const card = datas.find((data) => data.id === id);
    const { time } = card;

    if (requiredTimeString.innerText === "0") {
      setRequiredTime(time);
    }
    if (requiredTimeString.innerText) {
      const requiredTimeContNum = parseFloat(requiredTimeString.innerText);
      const totalrequiredTime = requiredTimeContNum + time;
      setRequiredTime(totalrequiredTime);
    }
  };

  const hambar = document.getElementById("profileAriya");
  const mobileMamue = () => {
    hambar.classList.toggle("hidden");
    hambar.classList.remove("profile_vigabol-hide");
  };

  return (
    <div className="web_body grid">
      <CardWraperContainer
        cardButn={cardButn}
        datas={datas}
        mobileMamue={mobileMamue}
      ></CardWraperContainer>
      <div id="profileAriya" className=" profile_vigabol-hide">
        <RightSiteBarContainer
          requiredTime={requiredTime}
        ></RightSiteBarContainer>
      </div>
    </div>
  );
};

export default WebBody;
