import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../Products/products"; // Adjust the path based on your project structure
import "./Shawls.css"; // Ensure you have this file or reuse styles from casual.css if needed

const Shawls = () => {
  const shawlsData = products.Shawls; // Get Shawls data from products

  // Check if shawlsData is available before rendering
  if (!shawlsData) {
    return <div>Loading...</div>; // Show a loading message if shawlsData is not yet loaded
  }

  // State to manage the selected image index for each product
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(
    shawlsData.map(() => 0) // Initialize state with 0 for each product
  );

  // Handle image change when clicking left
  const handlePrev = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      // Update index to the previous image, wrapping around to the last image if at the first
      newIndexes[index] = (currentIndex - 1 + shawlsData[index].images.length) % shawlsData[index].images.length;
      return newIndexes;
    });
  };

  // Handle image change when clicking right
  const handleNext = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      // Update index to the next image, wrapping around to the first image if at the last
      newIndexes[index] = (currentIndex + 1) % shawlsData[index].images.length;
      return newIndexes;
    });
  };

  // Function to format the price with commas and PKR symbol
  const formatPrice = (price) => {
    return  `PKR ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  return (
    <div className="shawls-container">
      <h1>Shawls</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {shawlsData.map((shawl, index) => {
          const images = shawl.images || [shawl.imageUrl];  // Default to imageUrl if images array is not available

          return (
            <div key={shawl.id} className="shawl-card relative">
              <div className="image-gallery relative">
                <Link to={`/product/Shawls/${shawl.id}`}>
                  <img
                    src={images[selectedImageIndexes[index]]}
                    alt={`Image of ${shawl.name}`}
                    className="w-full h-80 object-cover"
                  />
                </Link>

                <button
                  className="absolute-button left-arrow"
                  onClick={() => handlePrev(index)} // Only affect this product
                  aria-label={`Previous image of ${shawl.name}`} // Improved accessibility
                >
                  &#10094;
                </button>

                <button
                  className="absolute-button right-arrow"
                  onClick={() => handleNext(index)} // Only affect this product
                  aria-label={`Next image of ${shawl.name}`} // Improved accessibility
                >
                  &#10095;
                </button>
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{shawl.name}</h2>
                <p className="text-xl font-semibold price-text">{formatPrice(shawl.price)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shawls;
