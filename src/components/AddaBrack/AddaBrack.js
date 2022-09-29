import React from "react";
import "./AddaBrack.css";

const AddaBrack = () => {
  return (
    <div className="">
      <h1 className="text-xl my-6">Add a brack </h1>
      <div className="brack_secked_container flex justify-between flex-wrap items-center">
        <div className="item">
          <p>
            10<sub>s</sub>
          </p>
        </div>
        <div className="item">
          <p>
            20<sub>s</sub>
          </p>
        </div>
        <div className="item">
          <p>
            30<sub>s</sub>
          </p>
        </div>
        <div className="item">
          <p>
            40<sub>s</sub>
          </p>
        </div>
        <div className="item">
          <p>
            50<sub>s</sub>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddaBrack;
