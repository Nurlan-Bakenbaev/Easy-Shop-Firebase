import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite,handleClick,deleteFavorite}) => {
  return (
    <div className="favorite">
      <h2>Избранное</h2>
      <div className="favorite-card">
        {favorite.map((fav, id) => {
          return (
            <div className="fav__card-item">
              <Card
                link={fav.id}
                handleClick={handleClick} 
                key={id}
                img={fav.img}
                name={fav.name}
                newPrice={fav.newPrice}
                rating={fav.rating}/>
              <button onClick={() => DeleteFavorite(fav.name)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
