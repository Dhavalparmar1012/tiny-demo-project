import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.js";

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/checkout" className="cart-link">
          Checkout
          {totalItems > 0 && <span>{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
