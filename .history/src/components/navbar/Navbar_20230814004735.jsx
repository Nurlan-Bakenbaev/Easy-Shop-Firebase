import React from "react";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
const Navbar = ({ size,summ }) => {

  const totalQuantity = .reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <header>
        <nav>
          <div className="left-nav dflex">
            <Link to={"/"}>
              <h2>My Shop</h2>
            </Link>

            <select id="choose Phone">
              <option value="iphone-13">Выбрать модель</option>
              <option value="iphone-13-pro">iPhone 13 Pro</option>
              <option value="iphone-13-mini">iPhone 13 Mini</option>
              <option value="iphone-se-2022">iPhone SE </option>
              <option value="iphone-se-plus">iPhone SE Plus</option>
            </select>
          </div>
          <div className="right-nav dflex">
            <div className="favotite-icon">
              <Link to={"/favorites"}>
                <FavoriteIcon />
                <span>{size}</span>
              </Link>
            </div>
            <div className="cart-icon">
              <Link to={'/cart'}>
                <AddShoppingCartIcon />
              </Link>
              <span>{totalQuantity}</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
