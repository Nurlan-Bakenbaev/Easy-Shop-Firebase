import React from "react";
import { phones } from "../data.js";
import Card from "../Card.jsx";
import ".././Card.css";

const Main = ({ handleClick) => {
  return (
    <div>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>Телефоны</h3>
      <div className="card-list">
        {phones.map((item, key) => {
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

export default Main;
