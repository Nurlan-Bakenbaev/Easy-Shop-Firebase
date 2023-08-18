import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Card from "../../Card";
const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState();

  const cartData = emptyCart 
  if(cartData !==0){
    setCartIsFull(false)
  }
  return (
    <div className="cart-wrapper">
      {cartIsFull ? (
        cartData.map((item, key) => {
          <div className="card">
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
