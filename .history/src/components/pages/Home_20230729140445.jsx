import React from "react";
import Banner from "../banner/Banner.jsx";
import Main from "../main/Main.jsx";
import { headPhones, wirelessHeadPhones } from "../data.js";
import Card from "../Card.jsx";
import "../../App.css";
import { Link } from "react-router-dom";

const Home = ({ handleClick, handleFavorite }) => {

const[casesData,setCasesData]=use
  return (
    <div>
      <Banner />
      <Main handleClick={handleClick} handleFavorite={handleFavorite} />
      <h3 style={{ color: "slategray", marginTop: "40px" }}>Наушники</h3>
      <div className="headPhones">
        {headPhones.map((item, key) => {
          return (
            <Card
              handleClick={handleClick}
              key={key}
              img={item.img}
              name={item.name}
              newPrice={item.price}
              price={item.oldPrice}
              rating={item.rating}
            />
          );
        })}
      </div>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>
        Беспроводные наушники
      </h3>
      <div className="wireless">
        {wirelessHeadPhones.map((item, key) => {
          return (
            <Card
              handleClick={handleClick}
              key={key}
              img={item.img}
              name={item.name}
              newPrice={item.price}
              price={item.oldPrice}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
