import React, { PureComponent } from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="images/image 12.png" className="card--image" alt="Card" />
      <div className="card--stats">
        <img src="images/Star 1.png" className="card--star" alt="Star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <h2>Life Lessons with Katie Zaferes</h2>
      <p>
        <span className="bold">From $136 /</span> person
      </p>
    </div>
  );
}
