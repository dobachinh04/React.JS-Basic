import React, { PureComponent } from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src="images/Star 1.png" className="card--star" alt="Star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price} /</span> person
      </p>
    </div>
  );
}
