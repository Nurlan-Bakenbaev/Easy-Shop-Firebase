import React from "react";
import "../../App.css";
import Card from "../Card";

const Favorites = ({ favorite, handleClick, handleFavorite,handleAddToCart }) => {
  if (favorite.length === 0) {
    return (
      <div className="favorite">
      <img
        style={{ width: "40wh", height: "40vh" }}
        src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/edit-removebg-preview.png?alt=media&token=dfc5c539-60d1-43c9-9300-42576d0fa1d2"
        alt="Избранное"
      />
      <h2 style={{ textAlign: "center" }}>Favorite</h2>

    </div>);
  }else
  return (
    <div className="favorite">
      <h4 style={{ textAlign: "center" }}>Ваши Избранные</h4>
      <div className="favorite-card">
        {favorite.map((fav, key) => {
          return (
            <div className="fav__card-item" key={key}>
              <Card
                favorite={favorite}
                handleClick={handleClick}
                img={fav.img}
                name={fav.name}
                newPrice={fav.newPrice}
                rating={fav.rating}
              />
            <div className="favorite-btn">
            <button onClick={() => handleFavorite(fav)}>Удалить</button>
              <button onClick={() => handleAddToCart(fav)}>Корзину</button>

            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
