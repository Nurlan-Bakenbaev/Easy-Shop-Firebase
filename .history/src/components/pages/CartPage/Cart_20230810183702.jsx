import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
const Cart = ({summ}) => {
  const [cartIsFull, setCartIsFull] = useState(true);
  return (
    <div className="cart-wrapper">
      {cartIsFull ? (
        <>
          <div>
            <h1>Корзина</h1>{" "}
          </div>
          <div className="cart__grid">
            <div className="cart__card__wrapper">
              <div className="cart__info">
                <div className="cart__card__item">
                  <img src={"/Image7.png"} alt="Image" />
                  <div className="cart__btn">
                    <button>
                      <RemoveCircleIcon />
                    </button>
                    <span> 0 </span>
                    <button>
                      <AddCircleIcon />
                    </button>
                  </div>
                </div>
                <div>
                  <h3>Apple BYZ S852I</h3>
                  <p>$ 30</p>
                </div>
              </div>

              <button>
                <DeleteForeverIcon />
              </button>
            </div>
            <div className="summ__up">
              <h2>
                ИТОГО: <span>$ 30</span>
              </h2>
              <Link to={'/order'}>
                <button className="summ_upp_btn">Перейти к оформлению</button>
              </Link>
            </div>
          </div>
        </>
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
