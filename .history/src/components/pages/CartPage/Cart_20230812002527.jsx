import "./Cart.css";

const Cart = ({ emptyCart }) => {
  console.log(emptyCart);
  return (
  <div>{emptyCart.map((product) => 
    { return( 
      
      <div>
        <img src= alt="" />
      </div>)
    })}
    </div>)

};
export default Cart;
