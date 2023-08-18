import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite, handleClick, handleFavorite,link }) => {
  return (
    <div className="favorite">
      <h2 style={{textAlign:'center',margin:'20px'}}>Избранное</h2>
      <div className="favorite-card">
        {favorite.map((fav, key) => {
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
              <button onClick={() => handleFavorite(fav)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
