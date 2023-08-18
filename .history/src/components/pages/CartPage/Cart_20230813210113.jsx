import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Cart = ({
  cartItem,
  deleteItemfromCart,
  handleAddToCart,
  removeFromToCart,
}) => {
  if (!cartItem || cartItem.length === 0) {
    return (
      <h2 style={{ textAlign: "center", margin: "30px" }}>Корзина пуста.</h2>
    );
  }
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        {cartItem.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="item-data">
              <div>
                <img src={item.img} alt={item.title} />
                <div className="cart-btn d-flex">
                  <button onClick={() => removeFromToCart(item)}>-</button>
                  <span>{item.total}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </div>
              <div className="item-title">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>
            <div className="delete-btn">
              <button onClick={() => deleteItemfromCart(item)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-btn">
        <h3>
          Итого: <span>{}</span>
        </h3>
        <button className="">
          <Link to={"/orderpage"}>Перейти к оформлению</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
