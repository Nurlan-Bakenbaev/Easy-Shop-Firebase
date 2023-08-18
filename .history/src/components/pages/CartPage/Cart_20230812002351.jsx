import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (
  <div>{emptyCart.map((product) => 
    {
      <>
      <div>Hello world </div>
      </>
    })}</div>)

};
export default Cart;
