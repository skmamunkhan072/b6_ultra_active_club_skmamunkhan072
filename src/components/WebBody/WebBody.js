import React, { useEffect, useState } from "react";
import CardWraperContainer from "../CardWraperContainer/CardWraperContainer";
import RightSiteBarContainer from "../RightSiteBarContainer/RightSiteBarContainer";
import "./WebBody.css";

const WebBody = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`Fackdb.json`)
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);
  console.log(datas);
  return (
    <div className="web_body grid">
      <CardWraperContainer></CardWraperContainer>
      <RightSiteBarContainer></RightSiteBarContainer>
    </div>
  );
};

export default WebBody;
