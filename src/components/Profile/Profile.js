import React from "react";
import "./Profile.css";
import Mamun from "../../images/Mamun.jpg";

const Profile = () => {
  return (
    <div>
      <div className="flex  justify-center flex-wrap items-center">
        <div className="profile_img_wraper">
          <img src={Mamun} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            Mamun <span className="last_name">Khan</span>
          </h2>
          <p>Dhaka, Bangladesh</p>
          <p>I am a small developer</p>
        </div>
      </div>

      <div className="my_details flex justify-between items-center my-5">
        <div>
          <p className="text-xl font-semibold">
            40
            <sub>kg</sub>
          </p>
          <p className="text-xs">Wight</p>
        </div>
        <div>
          <p className="text-xl font-semibold">5.8</p>
          <p className="text-xs">Hight</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            21
            <sub>year</sub>
          </p>

          <p className="text-xs">Age</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
