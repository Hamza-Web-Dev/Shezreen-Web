import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total number of items
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    // Navigate to the final checkout page
    navigate('/checkout-final');
  };

  return (
    <div className="checkout-container">
      <h1>Shopping Cart</h1>

      {/* Table Header */}
      <div className="checkout-header">
        <div className="header-product">Product</div>
        <div className="header-price">Price</div>
        <div className="header-quantity">Quantity</div>
        <div className="header-total">Total</div>
      </div>

      {/* Items */}
      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <div className="item-details">
              <img src={item.image} alt={item.name} className="item-image" />
              <div>
                <p className="item-name">{item.name}</p>
                <p className="item-size">Size: {item.size}</p>
               {/* Conditionally show selected option, and hide if it's "No Option" or empty */}
{item.option && item.option !== "No Option" && (
  <p className="item-option">Option: {item.option}</p>
)}

              </div>
            </div>
            <div className="item-price">PKR {item.price}</div>
            <div className="item-quantity">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              {/* Remove Button */}
              <button
                className="remove-item-btn"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
            <div className="item-total">PKR {item.price * item.quantity}</div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="checkout-summary">
        <p className="total-items">Total Items: {totalItems}</p>
        <p className="subtotal">Subtotal: PKR {subtotal}</p>
        <button className="checkout-btn" onClick={handleCheckout}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Checkout;
