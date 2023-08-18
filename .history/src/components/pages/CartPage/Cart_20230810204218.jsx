import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const Cart = ({aboutItem}) => {
  const [cartIsFull, setCartIsFull] = useState(true);
  return (
    <div className="cart-wrapper">
      {cartIsFull ? (
        <>
         {aboutItem.map{{}}}
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
