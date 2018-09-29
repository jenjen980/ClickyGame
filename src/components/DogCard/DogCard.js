import React from "react";
import "./DogCard.css";


const DogCard = props => (
  <div className="card"
  value={props.id}
  onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img class = "imgclass" alt={props.name} src={props.image}/>
    </div>
  </div>
);


export default DogCard;
