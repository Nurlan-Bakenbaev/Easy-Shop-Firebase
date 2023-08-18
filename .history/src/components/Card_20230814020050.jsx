import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ img, name, rating, price, newPrice, handleClick,link}) => {
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const products = { img, name, rating, price, newPrice,favoriteIcon};

  return (
    <>
      <div className="card">
        <div>
          <div onClick={() => setFavoriteIcon(!favoriteIcon)}>
            {handleClick ? (
              <button onClick={() => handleClick(products)}>
                {favoriteIcon  ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="img-wrapper">
            <Link to={`/aboutproduct/${link}`}>
              <img src={img} alt="Image" />
            </Link>
          </div>
          <div className="item-info">
            <h4>{name}</h4>
            <div className="price">
              <p>$ {newPrice}</p>
              <p
                style={{
                  textDecoration: "line-through",
                  color: "red",
                  fontStyle: "italic",
                }}
              >
                {price}
              </p>
              {price && <p> ${newPrice - price} off</p>}
            </div>
          </div>
          <div className="rate">
            <GradeIcon />
            <span> {rating}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
