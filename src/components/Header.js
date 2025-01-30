import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <header>
      <div className="header-container">
        {/* 🟢 Clickable Logo */}
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>ShoppyGlobe</h1>
        </Link>

        <nav>
          {/* 🟡 View Cart Button */}
          <Link to="/cart">
            <button className="view-cart-btn">
              🛒 View Cart ({cartItems.length})
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
