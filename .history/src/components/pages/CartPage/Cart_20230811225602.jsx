import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState();

  return (
    <div className="cart-wrapper-cat">
      {cartIsFull ? (
        emptyCart.map((item, key) => {
          <div key={key} className="card-cart">
          <img src={item.imgUrl} alt={item.name} className="card-img" />
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-price">${item.price}</p>
            <div className="card-rating">
              Rating: {item.rating} 
            </div>
          </div>
        </div>

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
