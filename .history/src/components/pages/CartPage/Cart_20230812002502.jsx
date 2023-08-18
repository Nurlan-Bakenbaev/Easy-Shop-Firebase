import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (
  <div>{emptyCart.map((product) => 
    { return( 
      
      <div>{product.img} </div>)
    })}
    </div>)

};
export default Cart;
