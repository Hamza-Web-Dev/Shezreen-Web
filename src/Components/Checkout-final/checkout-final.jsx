import React, { useState, useEffect } from 'react';
import './CheckoutDetails.css';

const CheckoutFinal = ({ cart, setCart, shippingCost = 200 }) => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Pakistan');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const [errors, setErrors] = useState({});

  // Reset form and errors when page is refreshed or component mounts
  useEffect(() => {
    setEmail('');
    setCountry('Pakistan');
    setFirstName('');
    setLastName('');
    setAddress('');
    setApartment('');
    setCity('');
    setPostalCode('');
    setPhone('');
    setNote('');
    setErrors({});
  }, []); // Empty array ensures this runs only once when component mounts

  // Calculate subtotal dynamically from the cart
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total including shipping cost
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost;
  };

  // Handle item removal from the cart
  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart); // Update the cart in the parent component
  };

  // Validation check before allowing to proceed
  const validateForm = () => {
    const validationErrors = {};

    if (!email) validationErrors.email = 'Email is required';
    if (!firstName) validationErrors.firstName = 'First name is required';
    if (!lastName) validationErrors.lastName = 'Last name is required';
    if (!phone) validationErrors.phone = 'Phone number is required';

    setErrors(validationErrors);

    // If no errors, return true to proceed
    return Object.keys(validationErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const customerDetails = `\
Email: ${email}
Name: ${firstName} ${lastName}
Address: ${address}, ${apartment}, ${city}, ${country}, Postal Code: ${postalCode}
Phone: ${phone}`;

    let cartDetails = '\nCart Details:\n';
    cart.forEach((item) => {
      cartDetails += ` - ${item.name} (x${item.quantity}): PKR ${item.quantity * item.price}\n`;
      // Add the selected option if it exists
      if (item.option) {
        cartDetails += `   Option: ${item.option}\n`;
      }
    });

    const totalDetails = `\nSubtotal: PKR ${calculateSubtotal()}\nShipping: PKR ${shippingCost}\nGrand Total: PKR ${calculateTotal()}`;

    const message = `New Order:\n${customerDetails}${cartDetails}${totalDetails}\nNote: ${note}`;

    const phoneNumber = '923250121119'; // Replace with your phone number
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handlePayNow = () => {
    if (validateForm()) {
      const whatsappLink = generateWhatsAppMessage();
      window.open(whatsappLink, '_blank');
      setErrors({}); // Clear errors after form submission
    }
  };

  // Function to safely format the number for currency display
  const formatCurrency = (amount) => {
    return amount && !isNaN(amount) ? amount.toLocaleString() : '0';
  };

  return (
    <div className="checkout-details">
      <div className="left-section">
        <form>
          <div className="section">
            <h2>Contact</h2>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <label>
              <input type="checkbox" /> Email me with news and offers
            </label>
          </div>

          <div className="section">
            <h2>Delivery</h2>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Select">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              {/* Add more options as needed */}
            </select>
            <div className="row">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />
            <div className="row">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Postal code (optional)"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="section">
            <h2>Shipping method</h2>
            <div className="shipping-option">
              <span>Cash on Delivery</span>
              <span>PKR {formatCurrency(shippingCost)}</span>
            </div>
          </div>

          <div className="section">
            <h2>Order Note</h2>
            <textarea
              placeholder="Add a note to your order"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="right-section">
        <h2>Order Summary</h2>
        <div className="cart-summary">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                {item.option && <span>Option: {item.option}</span>}
              </div>
              <span className="cart-item-price">
                PKR {formatCurrency(item.price * item.quantity)}
              </span>
              <button
                className="remove-item-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                <i className="fas fa-trash-alt"></i> {/* Font Awesome trash icon */}
              </button>
            </div>
          ))}
        </div>

        <div className="summary-line">
          <span>Subtotal</span>
          <span>PKR {formatCurrency(calculateSubtotal())}</span>
        </div>
        <div className="summary-line">
          <span>Shipping</span>
          <span>PKR {formatCurrency(shippingCost)}</span>
        </div>
        <div className="summary-line total">
          <span>Total</span>
          <span>PKR {formatCurrency(calculateTotal())}</span>
        </div>

        <button
          className="pay-now-btn"
          onClick={handlePayNow}
          disabled={Object.keys(errors).length > 0} // Disable button if there are errors
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutFinal;
