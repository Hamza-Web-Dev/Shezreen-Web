import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/923250121119', 'Hey'); // Replace with your WhatsApp number
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
