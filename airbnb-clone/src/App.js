import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // {...item} cũng là một giá trị "Chung Chung như item={item}" nhưng lần này {...item} sẽ lấy hết tất cả các giá trị dữ liệu trong data.js
        // VD: {...item} => id={item.id}, title={item.title}, description={item.description}...

        // item={item}
        // Đổi thành một giá trị "Chung Chung" item rồi qua Card Component thay đổi các giá trị
        // Cách này sẽ gọn hơn là gọi từng giá trị ra như ở dưới

        // img={item.coverImg}
        // star={item.stats.rating}
        // reviews={item.stats.reviewCount}
        // title={item.title}
        // location={item.location}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>

      {/* Thay vì copy từng components rồi gán giá trị vào như này thì ta nên dùng array.map() như trên  */}

      {/* <Card
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
        title="Learn wedding photography"
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
      /> */}
    </div>
  );
}

export default App;
