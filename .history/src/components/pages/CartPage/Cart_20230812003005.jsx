import "./Cart.css";

const Cart = ({ cartItem }) => {
  console.log(cartItem);
  return (
  <div>{cartItem.map((product) => 
    { return( 
      
      <div>
        <img src={product.img} alt="Нет картинок" />
        <h2>{product.title}</h2>
      </div>)
    })}
    </div>)

};
export default Cart;
