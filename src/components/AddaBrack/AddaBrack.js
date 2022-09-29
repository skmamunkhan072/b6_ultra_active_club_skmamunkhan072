import React, { useEffect, useState } from "react";
import "./AddaBrack.css";
import { addToSeconds } from "../../utilitis/utilitis";

const AddaBrack = () => {
  return (
    <div className="">
      <h1 className="text-xl my-6">Add a brack </h1>
      <div className="brack_secked_container flex justify-between flex-wrap items-center">
        <p className="item" onClick={addToSeconds}>
          10<sub>s</sub>
        </p>
        <p onClick={addToSeconds} className="item">
          20<sub>s</sub>
        </p>
        <p onClick={addToSeconds} className="item">
          30<sub>s</sub>
        </p>
        <p onClick={addToSeconds} className="item">
          40<sub>s</sub>
        </p>
        <p onClick={addToSeconds} className="item">
          50<sub>s</sub>
        </p>
      </div>
    </div>
  );
};

export default AddaBrack;
