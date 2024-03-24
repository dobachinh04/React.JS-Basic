// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="Container">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
