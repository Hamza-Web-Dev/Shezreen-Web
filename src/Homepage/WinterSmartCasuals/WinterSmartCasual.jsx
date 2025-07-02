import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../Products/products"; // Adjust the path based on your project structure
import "./Casual.css";

const Winterollection = () => {
  const casualData = products.WinterCollection; // Get WinterSmartCasual data from products

  // State to manage the selected image index for each product
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(
    casualData.map(() => 0) // Initialize state with 0 for each product
  );

  // Handle image change when clicking left
  const handlePrev = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      // Update index to the previous image, wrapping around to the last image if at the first
      newIndexes[index] = (currentIndex - 1 + casualData[index].images.length) % casualData[index].images.length;
      return newIndexes;
    });
  };

  // Handle image change when clicking right
  const handleNext = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      // Update index to the next image, wrapping around to the first image if at the last
      newIndexes[index] = (currentIndex + 1) % casualData[index].images.length;
      return newIndexes;
    });
  };

  // Function to format the price with commas and PKR symbol
  const formatPrice = (price) => {
    const roundedPrice = Math.round(price); // Round the price to remove decimals
    return `PKR ${roundedPrice.toLocaleString()}`;
  };

  return (
    <div className="casual-container">
      <h1 className='heading-casual'>Winter Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {casualData.map((casual, index) => {
          const images = casual.images || [casual.imageUrl];  // Default to imageUrl if images array is not available
          const originalPrice = casual.saleprice; // Assuming this is the original price
          const discountPercentage = 20;
          const discountedPrice = originalPrice * (1 - discountPercentage / 100); // Calculate 20% off

          return (
            <div key={casual.id} className="casual-card relative">
              <div className="image-gallery relative">
                {/* SALE Label */}
                {discountPercentage > 0 && (
                  <div className="sale-label absolute top-2 right-2 text-xs font-bold bg-red-500 text-white py-1 px-2">
                    {discountPercentage}% OFF
                  </div>
                )}

                {/* Main Image */}
                <Link to={`/product/WinterCollection/${casual.id}`}>
                  <img
                    src={images[selectedImageIndexes[index]]}
                    alt={`Image of ${casual.name}`}
                    className="w-full h-80 object-cover"
                  />
                </Link>

                {/* Left Arrow */}
                <button
                  className="absolute-button left-arrow"
                  onClick={() => handlePrev(index)} // Only affect this product
                  aria-label={`Previous image of ${casual.name}`} // Improved accessibility
                >
                  &#10094;
                </button>

                {/* Right Arrow */}
                <button
                  className="absolute-button right-arrow"
                  onClick={() => handleNext(index)} // Only affect this product
                  aria-label={`Next image of ${casual.name}`} // Improved accessibility
                >
                  &#10095;
                </button>
              </div>
              <div className="p-4 text-center">
                {/* Product Name */}
                <h2 className="text-lg font-semibold">{casual.name}</h2>

                {/* Price with Discount */}
                <div className="text-xl font-semibold text-gray-700">
                  {/* Display original price with strikethrough */}
                  <span className="line-through text-sm text-gray-500 mr-2">
                    {formatPrice(originalPrice)}
                  </span>
                  {/* Display discounted price */}
                  <span className="text-lg font-semibold text-red-600">
                    {formatPrice(discountedPrice)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Winterollection;
