import React from "react";
import "./CardHeaderContainer.css";
import logo from "../../images/logo.png";

const CardHeaderContainer = () => {
  return (
    <div>
      <div className="card_header_wraper flex flex-wrap justify-start items-center ">
        <div className="card_logo_wraper">
          <img className="card_logo" src={logo} alt="Logo img" />
        </div>
        <h1 className="ml-4 text-2xl font-bold card_header_text">
          Exercise Active Club
        </h1>
      </div>
      <h2 className="my-10 text-lg font-semibold">Select today’s exercise</h2>
    </div>
  );
};

export default CardHeaderContainer;
