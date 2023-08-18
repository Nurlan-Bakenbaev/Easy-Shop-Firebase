import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);
  return (
  <div>{cartItem.map((product) => 
    { return( 
      
      <div>
        <img src={product.img} alt="" />
      </div>)
    })}
    </div>)

};
export default Cart;
