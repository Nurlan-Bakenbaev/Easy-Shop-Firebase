import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Cart = ({
  cartItem,
  deleteItemfromCart,
  handleAddToCart,
  removeFromToCart,
}) => {
  const totalCost = cartItem.reduce(
    (total, item) => total + item.price * item.total,
    0
  );
  if (!cartItem || cartItem.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "40vh", height: "40vh", padding: "20px" }}
          src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/Illustration.png?alt=media&token=533dcc39-1e48-4d73-9b09-15d122d75f39"
          alt="Пустая Корзина"
        />
        <h2 style={{ textAlign: "center" }}>Корзина пуста.</h2>
      </div>
    );
  }
  return (
    <div className="cart-wrapper">
      <div className="cart-box">
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
                <p>{item.oldPrice}</p>
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
          Итого: <span>$ {Math.totalCost}</span>
        </h3>
        <button className="cart-btn">
          <Link to={"/orderpage"}>Перейти к оформлению</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
