import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite, handleClick, handleFavorite }) => {
  if (favorite.length === 0) {
    return (
      <div className="fa">
      <img
        style={{ width: "40wh", height: "40vh" }}
        src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/edit-removebg-preview.png?alt=media&token=dfc5c539-60d1-43c9-9300-42576d0fa1d2"
        alt="Избранное"
      />
    </div>);
  }else
  return (
    <div className="favorite">
      <h2 style={{ textAlign: "center" }}>Избранное</h2>
      <div className="favorite-card">
        {favorite.map((fav, key) => {
          return (
            <div className="fav__card-item" key={key}>
              <Card
                link={fav.id}
                favorite={favorite}
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
