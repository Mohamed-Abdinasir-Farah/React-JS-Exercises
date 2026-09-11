import React, { useState } from "react";
import CartContext from "./CartContext";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const value = { items, addItem, removeItem };

  return (
    <CartContext.Provider value={value}>
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        <h1>Simple Shopping Cart</h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}>
          <ProductCard itemId={1} itemName="Widget" price={19.99} />
          <ProductCard itemId={2} itemName="Gadget" price={29.99} />
          <ProductCard itemId={3} itemName="AirPod" price={79.99} />
        </div>


        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
