import React, { useContext } from "react";
import CartContext from "./CartContext";

function ProductCard({ itemId, itemName, price }) {
  const { addItem } = useContext(CartContext);

  const addProduct = () => {
    addItem({
      id: itemId,
      name: itemName,
      price: price,
    });
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "15px",
        margin: "15px 15px",
        maxWidth: "200px",
        width: "100%"
      }}
    >
      <h3>{itemName}</h3>
      <p>Price: ${price}</p>

      <button
        onClick={addProduct}
        style={{
          padding: "8px 15px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;