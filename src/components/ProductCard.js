import React, { useContext } from "react";
import { CartContext } from "../App.js";

const ProductCard = ({ product }) => {
  const { setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If product already exists, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add the new product to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} added to cart!`);
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
