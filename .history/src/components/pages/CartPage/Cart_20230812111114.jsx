import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);

  if (!cartItem || cartItem.length === 0) {
    return <p>No items in the cart.</p>;
  }
  return (
    <div className="cart-container">
      {cartItem.map((item, index) => (
        <div className="cart-item" key={index}>
        <div className="item-img">
          <img src={item.img} alt={item.title} /> 
          <button></button>
          <span>{item.total}</span>
          <button></button>
          </div>
          <h2>{item.title}</h2>
          <p>${item.price}</p>
       </div>
      ))}
    </div>
  );
};

export default Cart;
