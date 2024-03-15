import React, { PureComponent } from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src="images/Star 1.png" className="card--star" alt="Star" />
        <span>{props.star}</span>
        <span className="gray">{props.reviews}</span>
        <span className="gray">{props.place}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price} /</span> person
      </p>
    </div>
  );
}
