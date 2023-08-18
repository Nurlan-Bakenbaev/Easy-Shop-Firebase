import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div className="cart-container">
      {cartItem.map((el, index) => (
        <div className="cart-item" key={index}>
          <img src={el.img} alt={cartItem.title} />
          <h2>{el.title}</h2>
          <p>${cartItem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
