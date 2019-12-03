import React from "react";
import "./style.css";

function ImageCard({ card, handleClick }) {
  //const { card } = props;
  return (
    <div className="card" onClick={()=>handleClick(card.name)}>
      <h3>{card.name}</h3>
      <div className="img-container">
        <img alt={card.name} src={card.img} />
      </div>
    </div>
  );
}

export default ImageCard;
