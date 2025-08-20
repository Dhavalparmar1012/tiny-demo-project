import React, { useContext } from "react";
import { CartContext } from "../App.js";

const CartItem = ({ item }) => {
  const { setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      // Find the item
      const existingItem = prevCart.find((p) => p.id === id);

      if (existingItem.quantity > 1) {
        // Decrease quantity if more than one
        return prevCart.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        // Remove item entirely if quantity is 1
        return prevCart.filter((p) => p.id !== id);
      }
    });
  };

  return (
    <div className="cart-item">
      <div>
        <span>{item.name}</span> (x{item.quantity}) - ₹
        {item.price * item.quantity}
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
