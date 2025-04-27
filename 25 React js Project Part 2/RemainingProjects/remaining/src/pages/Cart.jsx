import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/Slices/Cart-Slics'; // adjust path as needed

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalCart(total.toFixed(2));
  }, [cart]);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button className="remove-btn" onClick={() => handleRemove(item)}>
                  Remove ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>🧾 Cart Total: ₹{totalCart}</h3>
      </div>

      {/* Inline CSS */}
      <style>{`
        .cart-container {
          padding: 20px;
          max-width: 800px;
          margin: auto;
        }

        .cart-list {
          list-style: none;
          padding: 0;
        }

        .cart-item {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 12px;
          background-color: #fdfdfd;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .cart-image {
          width: 100px;
          height: auto;
          object-fit: contain;
        }

        .cart-details {
          flex: 1;
        }

        .cart-details h3 {
          margin: 0 0 10px;
        }

        .remove-btn {
          margin-top: 10px;
          padding: 6px 12px;
          background-color: #ff4d4f;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        .remove-btn:hover {
          background-color: #d9363e;
        }

        .cart-total {
          margin-top: 30px;
          padding: 15px;
          background-color: #f3f3f3;
          border-radius: 8px;
          text-align: right;
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Cart;
