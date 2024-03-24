import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          name=""
          id=""
          className="form--input"
          placeholder="Top Text"
        />
        <input
          type="text"
          name=""
          id=""
          className="form--input"
          placeholder="Bottom Text"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a New Meme Image 🖼
        </button>
      </form>
    </main>
  );
}
