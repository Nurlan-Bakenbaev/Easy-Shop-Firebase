import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Favorites from "./components/pages/Favorites";
import TermsOfUse from "./components/pages/TermsOfUse";
import Contacs from "./components/pages/Contacs";
import { useState } from "react";
import AboutProduct from "./components/pages/AboutPage/AboutProduct";
import Cart from "./components/pages/CartPage/Cart";
import Order from "./components/pages/VerifyingOrder/Order";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (item) => {
    const existItem = cartItem.find((el) => el.id === item.id);
    if (existItem) {
      const updatedCart = cartItem.map((el) =>
        el.id === item.id ? { ...el, total: item.total + 1 } : el
      );
      setCartItem(updatedCart);
    } else {
      const newItem = [...cartItem, { ...item, total: 1 }];
      setCartItem([newItem]);.cart-wrapper-cat{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        color: black;
        border: 1px solid red;
        
      }
      /* Cart.css */
      .cart-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      
      .cart-item {
        border: 1px solid #ddd;
        padding: 10px;
        width: 200px;
        text-align: center;
      }
      
      .cart-item img {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
      
      .cart-item h2 {
        font-size: 1.2rem;
        margin: 0;
      }
      
      .cart-item p {
        font-size: 1rem;
        color: #333;
        margin: 0;
      }
      
    }
    console.log(cartItem);
  };
  const handleFavorite = (name) => {
    setFavorite((prevFavorites) =>
      prevFavorites.filter((item) => item.name !== name)
    );
  };
  function handleClick(item) {
    let isPresent = false;
    favorite.forEach((product) => {
      if (item.name === product.name) isPresent = true;
    });
    if (isPresent) return;
    setFavorite([...favorite, item]);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar size={favorite.length} summ={cartItem.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Home handleClick={handleClick} handleFavorite={handleFavorite} />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites favorite={favorite} handleFavorite={handleFavorite} />
            }
          />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/contacs" element={<Contacs />} />
          <Route
            path="/aboutproduct/:id"
            element={<AboutProduct handleAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cartItem={cartItem} />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
