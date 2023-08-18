import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (
  <div>{emptyCart.map((product) => 
    { return( 
      
      <div>{product.} </div>)
    })}
    </div>)

};
export default Cart;
