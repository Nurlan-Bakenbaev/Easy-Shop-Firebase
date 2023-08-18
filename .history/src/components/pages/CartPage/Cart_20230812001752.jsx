import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (
    {emptyCart.map((product)=>)}
  <div className="cart_item_wrapper">
<div className="cart_item">
  <img src={product.img} alt="" />
</div>
  </div>
  )
};

export default Cart;
