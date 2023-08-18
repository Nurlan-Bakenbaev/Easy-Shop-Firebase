import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div className="cart-container">
      {cartItems.map((cartItem, index) => (
        <div className="cart-item" key={index}>
          <img src={cartItem.img} alt={cartItem.title} />
          <h2>{cartItem.title}</h2>
          <p>${cartItem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
