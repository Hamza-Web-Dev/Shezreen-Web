import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          {/* About Us and Stores Section */}
          <h3>About Us</h3>
          <p>
          At Shezreen by Amina Shah, we believe every woman deserves to express her unique style with confidence and comfort. Our collection features a wide range of trendy, high-quality clothing designed to suit the diverse tastes of women. From casual everyday wear to special occasion outfits, our clothes are crafted with care and attention to detail, ensuring comfort, durability, and a perfect fit. We’re committed to helping every woman look and feel her best, and we strive to deliver a shopping experience that keeps you coming back
          </p>
          <h4>Stores</h4>
          <ul>
          <li>Gulberg II - Lahore - Pakistan 📍</li>
          <li> 🌎 Worldwide shipping</li>
          </ul>
        </div>
        <div className="footer-column">
          {/* Help and other links Section */}
          <h3>Help</h3>
          <ul>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/terms-and-condition">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          {/* Optional Social Media Links Section */}
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100068001453077&mibextid=ZbWKwL">Facebook</a></li>
            <li><a href="https://www.instagram.com/byaminashah/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="Rights">
        © Shezreen by Amina Shah All Rights Reserved 2025
        <br />
        Developed by <a href="https://www.devrexdigital.com/" target="_blank" rel="noopener noreferrer">Devrex Digital</a>.
        <br />
        <br />
      </div>
    </footer>
  );
};

export default Footer;
