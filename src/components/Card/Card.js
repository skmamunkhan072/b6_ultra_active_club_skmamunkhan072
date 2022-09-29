import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="card_img">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
