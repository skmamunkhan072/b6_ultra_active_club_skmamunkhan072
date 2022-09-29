import React from "react";
import Card from "../Card/Card";
import CardHeaderContainer from "../CardHeaderContainer/CardHeaderContainer";
import "./CardWraperContainer.css";

const CardWraperContainer = ({ datas }) => {
  return (
    <div className="header_wraper">
      <CardHeaderContainer></CardHeaderContainer>
      <div className="card_container grid sm:grid-cols-1 md:grid-cols-1 md:p-8 lg:grid-cols-2 xl:grid-cols-3 gap-5  sm:mr-[60px]">
        {datas.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardWraperContainer;
