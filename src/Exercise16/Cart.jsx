import React, { useContext } from "react";
import CartContext from "./CartContext";

function Cart() {
  const { items, removeItem } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        marginTop: "25px",
      }}
    >
      <h2>Cart</h2>
      <p>Total Items: {items.length}</p>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              {item.name} - ${item.price}{" "}
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  marginLeft: "8px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
