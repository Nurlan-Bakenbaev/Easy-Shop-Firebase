import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);

  if (!cartItem || cartItem.length === 0) {
    return <p>No items in the cart.</p>;
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
                  <button> - </button>
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
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
