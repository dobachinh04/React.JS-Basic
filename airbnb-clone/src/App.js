import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        img="images/image 12.png"
        star="5.0"
        reviews="(6) • "
        title="Life Lessons with Katie Zaferes"
        place="USA"
        price="136"
      />
      <Card
        img="images/wedding-photography 1.png"
        star="5.0"
        reviews="(30) • "
        title="Learn wedding photography        "
        place="USA"
        price="125"
      />
      <Card
        img="images/mountain-bike 1.png"
        star="4.8"
        reviews="(2) • "
        title="Group Mountain Biking"
        place="USA"
        price="50"
      />
    </div>
  );
}

export default App;
