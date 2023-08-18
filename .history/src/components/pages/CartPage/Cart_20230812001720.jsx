import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (
  <div className="cart_item_wrapper">
<div className="cart_item">
  <img src={productimg} alt="" />
</div>
  </div>
  )
};

export default Cart;
