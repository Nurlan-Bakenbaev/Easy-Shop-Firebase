import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState(true);

  return (
    <div className="cart-wrapper-cat">
      {emptyCart.map((item) =>(
      
        <div className="cart">

          </div>
      ))}
    </div>
  );
};

export default Cart;
