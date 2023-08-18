import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite,handleClick,handleFavorite}) => {
  return (
    <div className="favorite">
      Избранное
      <div className="favorite-card">
        {favorite.map((fav, key) => {
          return (
            <div className="fav__card-item">
              <Card
              handleClick={handleClick} 
                key={key}
                img={fav.img}
                name={fav.name}
                newPrice={fav.newprice}
                rating={fav.rating}/>
              <button onClick={() => handleFavorite(fav.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
