import React from "react";
import Card from "../Card.jsx";
import ".././Card.css";

const Main = ({ handleClick,phonesData}) => {
  return (
    <div>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>Телефоны</h3>
      <div className="card-list">
        {phonesData.map((item, key) => {
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
