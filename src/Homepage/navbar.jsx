// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Ensure to import your navbar CSS for styling

const Navbar = () => {
  const menuItems = [
    {
      name: "HOME",
      path: "/", // Path for Home
    },
    {
      name: "BRIDALS",
      path: "/bridals", // Path for Bridals
      submenu: [
        { name: "BARAT", path: "/bridals/Barat" },
        { name: "WALIMAH", path: "/bridals/Walimah" },
        { name: "NIKKAH", path: "/bridals/Nikkah" },
      ],
    },
    {
      name: "FORMALS",
      path: "/formals", // Path for Formals
    },
    {
      name: "SAREE",
      path: "/saree", // Path for Sarree
    },
    {
      name: "SHAWLS",
      path: "/shawls", // Path for Shawls
    },
    {
      name: "Winter Collection",
      path: "/WinterCollection", // Path for Winter Smart Casuals
    },
  ];

  return (
    <nav className="navbar">
      <ul className="menu">
        {menuItems.map((item) => (
          <li className="menu-item" key={item.name}>
            <Link to={item.path} className="menu-link">
              {item.name}
            </Link>
            {item.submenu && (
              <ul className="submenu">
                {item.submenu.map((subItem) => (
                  <li className="submenu-item" key={subItem.name}>
                    <Link to={subItem.path} className="submenu-link">
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
