import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState(true);

  return (
    <div className="cart-wrapper-cat">
      {emptyCart.map((item) => (
        <div className="cart_item" key={item.id}>
          <img src={item.img} alt={item.title} />
          
        </div>
      ))}
    </div>
  );
};

export default Cart;
