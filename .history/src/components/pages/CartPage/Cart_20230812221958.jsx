import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
const Cart = ({ cartItem,removeItemfromCart}) => {
  
  

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
                  <button>-</button>
                  <span>{item.total}</span>
                  <button>+</button>
                </div>
              </div>
              <div className="item-title">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>
            <div className="delete-btn">
              <button onClick={()removeItemfromCart}>
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
        <button>Перейти к оформлению</button>
      </div>
    </div>
  );
};

export default Cart;
