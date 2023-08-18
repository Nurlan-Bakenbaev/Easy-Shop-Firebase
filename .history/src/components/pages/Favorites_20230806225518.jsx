import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite,handleClick,handleFavorite}) => {
  return (
    <div className="favorite">
      Избранное
      <div className="favorite-card">
        {favorite.map((fav, id) => {
          return (
            <div className="fav__card-item">
              <Card
                link={fav.name}
                handleClick={handleClick} 
                key={id}
                img={fav.img}
                name={fav.name}
                newPrice={fav.newPrice}
                rating={fav.rating}/>
              <button onClick={() => handleFavorite(fav.name)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
