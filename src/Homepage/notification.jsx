import React from 'react';
import './Notification.css'; // Ensure you have a corresponding CSS file

const Notification = ({ image, message ,name}) => {
  return (
    <div className="notification-container">
      <div className="notification-content">
        <img src={image} alt="Product" className="notification-image" />
        <span>{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Notification;
