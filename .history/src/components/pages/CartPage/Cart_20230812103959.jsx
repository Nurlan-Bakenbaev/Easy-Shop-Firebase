import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);

  if (!cartItem || cartItem.length === 0) {
    return <p>No items in the cart.</p>;
  }
  return (
    <div className="cart-container">
      {cartItem.map((el, index) => (
        <div className="cart-item" key={index}>
          <img src={el.img} alt={el.title} />
          <h2>{el.title}</h2>
          <p>${el.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
