import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => alert("Order placed successfully!")}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
