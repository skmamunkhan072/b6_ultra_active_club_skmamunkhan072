import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  console.log(data);
  const { id, name, details, img, time, quantity, email } = data;
  console.log(img);
  const newDetails = details.slice(0, 100);
  console.log(newDetails);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="card_img">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>{newDetails}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
