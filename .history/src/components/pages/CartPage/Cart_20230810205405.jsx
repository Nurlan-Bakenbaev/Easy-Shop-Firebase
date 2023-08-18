import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Card from "../../Card";
const Cart = ({emptyCart}) => {
  const [cartIsFull, setCartIsFull] = useState(false);
  return (
    <div className="cart-wrapper">
      {cartIsFull ? (
      emptyCart.map((item,key)=>{
        <Card
        key={key}
        img={item.img}/>
      if(car)
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
