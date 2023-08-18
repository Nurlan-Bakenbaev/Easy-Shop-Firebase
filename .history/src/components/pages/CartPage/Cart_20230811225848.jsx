import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState(true);

  return (
    <div className="cart-wrapper-cat">
      {cartIsFull ? (
        emptyCart.map((item, key) => {
          return;
          <>
            <div key={key} className="card-cart">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="card-img-cart"
              />
              <div className="card-body-cart">
                <h3 className="card-title-cart">{item.name}</h3>
                <p className="card-price-cart">${item.price}</p>
                <div className="card-rating-cart">Rating: {item.rating}</div>
              </div>
            </div>
          </>;
        })
      ) : (
        <div className="cartImg">
          <img src={"/Illustration.png"} alt="Корзина" />
          <h1>Корзина пуста</h1>
          <p style={{ color: "grey" }}>(Но это никогда не поздно исправить) </p>
          <Link to={"/"}>
            <button>В каталог товаров</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
