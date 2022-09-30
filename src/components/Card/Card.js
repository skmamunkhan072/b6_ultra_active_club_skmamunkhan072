import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  const { id, name, details, img, time, quantity, email, forAge } = data;
  const newDetails = details.slice(0, 100);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="card_img">
          <img src={img ? img : "No Data"} alt="Shoes" className="h-[220px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{newDetails}</p>
          <p>For Age : {forAge}</p>
          <p>Time required : {time}s</p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-primary px-20 py-0">Add to list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
