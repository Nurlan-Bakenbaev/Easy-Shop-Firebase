import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite, handleClick, handleFavorite }) => {
  return (
    <div className="favorite">
      <h2>Избранное</h2>
      <div className="favorite-card">
        {favorite.map((item, key) => {
          return (
            <div className="fav__card-item" key={key}>
              <Card
                
                link={item.id}
                handleClick={handleClick}
                img={item.img}
                name={item.name}
                newPrice={item.newPrice}
                rating={item.rating}
              />
              <button onClick={() => handleFavorite(item.n)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
