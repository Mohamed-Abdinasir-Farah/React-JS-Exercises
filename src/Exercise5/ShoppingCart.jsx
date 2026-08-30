import { useState } from "react";

const ShoppingCart = () => {
  const [cartName, setCartName] = useState("");
  const [cartPrice, setCartPrice] = useState("");
  const [carts, setCarts] = useState([]);

  const handleAddCart = () => {
    if (cartName.trim() !== "" && cartPrice.trim() !== "") {
      const newCart = {
        id: crypto.randomUUID(),
        name: cartName,
        price: parseFloat(cartPrice),
        quantity: 1
      }
      setCarts([...carts, newCart])
      setCartName("");
      setCartPrice("");
    }
  }

  const handleRemoveCart = (id) => {
    const updatedCart = carts.filter((cart) => cart.id !== id);
    setCarts(updatedCart);
  }

  const increaseCart = (id) => {
    const updatedCarts = carts.map((cart) =>
      cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
    );
    setCarts(updatedCarts);
  }

  const decreaseCart = (id) => {
    const updatedCarts = carts.map((cart) => 
      cart.id === id && cart.quantity > 1 ? {...cart, quantity : cart.quantity - 1} : cart
    );
    setCarts(updatedCarts);
  }

  const totalPrice = carts.reduce((total, cart) => total + cart.price * cart.quantity, 0)

  return (
    <div>
      <h1>Simple Shopping Cart</h1>

      <div>
        <h2>Add a Product</h2>

        <input
          type="text"
          placeholder="Enter a Product"
          onChange={(e) => setCartName(e.target.value)}
          value={cartName}
        />

        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          onChange={(e) => setCartPrice(e.target.value)}
          value={cartPrice}
        />

        <button onClick={handleAddCart}>Add to Cart</button>
      </div>
      {
        carts.length > 0 ? (
          <div>
            <h2>Your cart is</h2>
            <ul>
              {
                carts.map((cart) => (
                  <li key={cart.id}>
                    <strong>{cart.name}</strong> - ${cart.price.toFixed(2)}

                    <div>
                      Quantity:
                      <button onClick={() => decreaseCart(cart.id)}>-</button>
                      {cart.quantity}
                      <button onClick={() => increaseCart(cart.id)}>+</button>
                    </div>

                    <button onClick={() => handleRemoveCart(cart.id)}>Remove</button>
                  </li>
                ))
              }
            </ul>

            <h2>Total Price is : ${totalPrice}</h2>
          </div>

        ) : <p>This Cart is Empty.</p>
      }
    </div>
  )
}

export default ShoppingCart;