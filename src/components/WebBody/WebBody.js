import React, { useEffect, useState } from "react";
import CardWraperContainer from "../CardWraperContainer/CardWraperContainer";
import RightSiteBarContainer from "../RightSiteBarContainer/RightSiteBarContainer";
import "./WebBody.css";

const WebBody = () => {
  return (
    <div className="web_body grid">
      <CardWraperContainer></CardWraperContainer>
      <RightSiteBarContainer></RightSiteBarContainer>
    </div>
  );
};

export default WebBody;
