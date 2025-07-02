import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-social-icons">
      <div className="social-media-icons">
        <a href="https://www.facebook.com/profile.php?id=100068001453077&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon" />
        </a>
        <a href="https://www.instagram.com/byaminashah/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
