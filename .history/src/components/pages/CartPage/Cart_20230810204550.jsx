import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({aboutItem}) => {
  const [cartIsFull, setCartIsFull] = useState(true);
  return (
    <div className="cart-wrapper">
      {cartIsFull ? (
      aboutItem.map((item,key)=>{
        <Card></Card>
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
