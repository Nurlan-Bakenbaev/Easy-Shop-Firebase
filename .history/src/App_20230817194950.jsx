import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Favorites from "./components/pages/Favorites";
import TermsOfUse from "./components/pages/TermsOfUse";
import Contacs from "./components/pages/Contacs";
import { useState, useEffect } from "react";
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
        el.id === item.id ? { ...el, total: el.total + 1 } : el
      );
      setCartItem(updatedCart);
      localStorage.setItem("products", JSON.stringify(updatedCart));
    } else {
      const newItem = { ...item, total: 1 };
      setCartItem([...cartItem, newItem]);
    }
  };
  const removeFromToCart = (item) => {
    const existItem = cartItem.find((el) => el.id === item.id);
    if (existItem) {
      const updatedCart = cartItem.map((el) =>
        el.id === item.id ? { ...el, total: Math.max(0, el.total - 1) } : el
      );
      
      setCartItem(updatedCart);
      localStorage.setItem("products", JSON.stringify(updatedCart));
    } else {
      const newItem = { ...item, total: 1 };
      setCartItem([...cartItem, newItem]);
    }
  };
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("products"));
    if (local) {
      setCartItem(local);
    }
  }, []);
  const deleteItemfromCart = (item) => {
    const newProduct = cartItem.filter((el) => el.id !== item.id);
    localStorage.setItem("products", JSON.stringify(newProduct));
    setCartItem(newProduct);
  };

  const handleFavorite = (fav) => {
    const newFavorite = favorite.filter((el) => el.name !== fav.name);
    localStorage.setItem("favorite", JSON.stringify(newFavorite));
    setFavorite(newFavorite);
  };

  function handleClick(item) {
    let isPresent = false;
    favorite.forEach((product) => {
      if (item.name === product.name) isPresent = true;
    });
    if (isPresent) return;
    localStorage.setItem("favorite", JSON.stringify(favorite));
    setFavorite([...favorite, item]);
  }
  useEffect(() => {
    const favorits = JSON.parse(localStorage.getItem("favorite"));
    if (favorits) {
      setFavorite(favorits);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar size={favorite.length} items={cartItem} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleClick={handleClick}
                  handleFavorite={handleFavorite}
                  favorite={favorite}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorite={favorite}
                  handleFavorite={handleFavorite}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/contacs" element={<Contacs />} />
            <Route
              path="/aboutproduct/:id"
              element={<AboutProduct handleAddToCart={handleAddToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItem={cartItem}
                  deleteItemfromCart={deleteItemfromCart}
                  removeFromToCart={removeFromToCart}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/orderpage" element={<Order cartItem={cartItem} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
