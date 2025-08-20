import React, { useContext } from "react";
import CartItem from "../components/CartItem.js";
import { CartContext } from "../App.js";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-total">
            Total: ₹{totalPrice.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
