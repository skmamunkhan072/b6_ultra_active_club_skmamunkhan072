import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./CardHeaderContainer.css";
import logo from "../../images/logo.png";

const CardHeaderContainer = ({ mobileMamue }) => {
  return (
    <div>
      <div
        id="card_header_wrapers"
        className="card_header_wraper flex flex-wrap justify-between w-11/12 items-center mx-auto"
      >
        <div className="card_header_wraper w-11/12 flex flex-wrap justify-start items-center ">
          <div className="card_logo_wraper">
            <img className="card_logo" src={logo} alt="Logo img" />
          </div>
          <h1 className="ml-4 text-2xl font-bold card_header_text">
            Exercise Active Club
          </h1>
        </div>
        <div className="w-1/12 hamber_icon">
          <i onClick={mobileMamue} className="ml-3 text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </i>
        </div>
      </div>
      <h2 className="my-10 text-lg font-semibold">Select today’s exercise</h2>
    </div>
  );
};

export default CardHeaderContainer;
