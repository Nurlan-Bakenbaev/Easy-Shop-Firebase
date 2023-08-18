import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite, handleClick, handleFavorite }) => {
  return (
    <div className="favorite">
      <h2>Избранное</h2>
      <div className="favorite-card">
        {favorite.map((, key) => {
          return (
            <div className="fav__card-item" key={key}>
              <Card
                
                link={fav.id}
                handleClick={handleClick}
                img={fav.img}
                name={fav.name}
                newPrice={fav.newPrice}
                rating={fav.rating}
              />
              <button onClick={() => handleFavorite(item)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
