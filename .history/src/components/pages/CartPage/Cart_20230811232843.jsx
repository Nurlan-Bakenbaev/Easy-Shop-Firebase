import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState(true);

  return (
    <div className="cart-wrapper-cat">
      {emptyCart.map((product) => {
        return (
        <div className="cart_item" key={product.id}>
          <img src={item.img} alt={product.title} />
          <h3>{item.title}</h3>
        </div>)
})}
    </div>
  );
};

export default Cart;
