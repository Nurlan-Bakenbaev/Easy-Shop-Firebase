import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ emptyCart }) => {
  const [cartIsFull, setCartIsFull] = useState(true);

  return (
    <div className="cart-wrapper-cat">
      {emptyCart.map((product) => {
        return (
        <div className="cart_item" key={product.id}>
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
        </div>)
})}
    </div>
  );
};

export default Cart;
