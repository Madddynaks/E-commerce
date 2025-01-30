import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./components/NotFound"; // ✅ Import NotFound
import "./style.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Provider store={store}>
      <Router>
        <Header onSearch={setSearchTerm} /> {/* ✅ Keep Header only here */}
        <Routes>
          <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* 🟡 Handle all invalid URLs with NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
