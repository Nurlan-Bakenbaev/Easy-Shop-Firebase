
import "./Cart.css";

const Cart = ({ emptyCart }) => {

  return (
    <div className="cart-wrapper-cat">
      {emptyCart.map((product) => {
        return (
          <div className="cart_item" key={product.id}>
            <img className="" src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
