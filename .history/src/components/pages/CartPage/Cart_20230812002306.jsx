import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (<div>{emptyCart.map((product) => {})}</div>;)

};
export default Cart;
