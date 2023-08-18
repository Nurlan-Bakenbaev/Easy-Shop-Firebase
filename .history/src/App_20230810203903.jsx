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
  const [emptyCart, setEmptyCart] = useState([]);

  const handleAddToCart = (item) => {
    const existItem = emptyCart.find((el) => el.id === item.id);
    if (existItem) {
      const updatedCart = emptyCart.map((el) =>
        el.id === item.id ? { ...el, total: item.total + 1 } : el
      );
      setEmptyCart(updatedCart);
      return updatedCart;
    } else {
      const newItem = [...emptyCart, { ...item, total: 1 }];
      setEmptyCart([...emptyCart, newItem]);
    }
    console.log(emptyCart);
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
        <Navbar size={favorite.length} summ={emptyCart.length} />
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
          <Route path="/cart" element={<Cart emptyCart={} />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
