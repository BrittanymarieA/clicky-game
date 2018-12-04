import React from "react";
import "./style.css";


function GameCard(props) {
  return (
    <div onClick={() => props.handleImgClick(props.id)}>
      <img className="image" src={props.image} />
    </div>
  );
}

export default GameCard;
