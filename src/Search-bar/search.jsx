import { useState, useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Search.css";

const Search = ({ totalItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Hamburger Menu Icon */}
      {!menuOpen && (
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={() => setMenuOpen(true)} />
        </div>
      )}

      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBlack___White_Minimalist_Signature_Personal_Brand_Logo_copy_3-removebg-preview.png?alt=media&token=07b95de9-8b44-4799-bd68-08541e28b202"
            alt="Logo 1"
            className="logo logo1"
          />
        </Link>
        <Link to="/" className="logo-link">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBlack___White_Minimalist_Signature_Personal_Brand_Logo_copy_3-removebg-preview.png?alt=media&token=07b95de9-8b44-4799-bd68-08541e28b202"
            alt="Logo 2"
            className="logo logo2"
          />
        </Link>
      </div>

      {/* Icons Section */}
      <div className="icons-container">
        <Link to="/checkout" className="cart-link">
          <RiShoppingCart2Line className="cart-icon" />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>

      {/* Menu Sidebar */}
      <div className={`menu-sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-menu-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <ul className="menu-items">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/bridals" onClick={() => setMenuOpen(false)}>
              Bridals
            </Link>
          </li>
          <li>
            <Link to="/formals" onClick={() => setMenuOpen(false)}>
              FORMALS
            </Link>
          </li>
          <li>
            <Link to="/saree" onClick={() => setMenuOpen(false)}>
              SAREE
            </Link>
          </li>
          <li>
            <Link to="/shawls" onClick={() => setMenuOpen(false)}>
              SHAWLS
            </Link>
          </li>
          <li>
            <Link to="/WinterCollection" onClick={() => setMenuOpen(false)}>
              Winter Collections  <br />
              <span className="sale-badge">20% OFF</span> {/* Sale Badge */}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Search;
