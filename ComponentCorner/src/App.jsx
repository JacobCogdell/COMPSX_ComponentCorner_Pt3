import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <Header storeName="Cogdell Component Corner" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>

      <Footer
        storeName="Cogdell Component Corner"
        contact="support@cogdellcomponents.com"
      />
    </BrowserRouter>
  );
}

export default App;
