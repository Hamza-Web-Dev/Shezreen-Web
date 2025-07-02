import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../Products/products";  // Ensure this path is correct
import "./Formal.css"; // relative to the current file

const Formals = () => {
  const formalsData = products.Formals;  // Get Formals data from products

  // State to manage the selected image index for each product
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(
    formalsData.map(() => 0)  // Initialize state with 0 for each product
  );

  // Handle image change when clicking left
  const handlePrev = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex - 1 + formalsData[index].images.length) % formalsData[index].images.length;
      return newIndexes;
    });
  };

  // Handle image change when clicking right
  const handleNext = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex + 1) % formalsData[index].images.length;
      return newIndexes;
    });
  };

  // Function to format the price with commas and "PKR" currency
  const formatPrice = (price) => {
    return `PKR ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <div className="formal-container">
      <h1>Formals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {formalsData.map((formal, index) => {
          const images = formal.images || [formal.imageUrl];  // Default to imageUrl if images array is not available

          return (
            <div key={formal.id} className="formal-card relative">
              <div className="image-gallery relative">
                {/* Main Image */}
                <Link to={`/product/Formals/${formal.id}`}>
                  <img
                    src={images[selectedImageIndexes[index]]}
                    alt={formal.name}
                    className="image-height"
                  />
                </Link>
            
                {/* Left Arrow */}
                <button
                  className="absolute-button left-arrow"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent any default behavior that may cause issues
                    handlePrev(index); // Only affect this product
                  }}
                >
                  &#10094;
                </button>
            
                {/* Right Arrow */}
                <button
                  className="absolute-button right-arrow"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent any default behavior that may cause issues
                    handleNext(index); // Only affect this product
                  }}
                >
                  &#10095;
                </button>
              </div>
            
              <div className="p-4 text-center flex flex-col justify-start items-center"> {/* Added flex properties */}
                {/* Product Name */}
                <h2 className="text-lg font-semibold">{formal.name}</h2>
            
                {/* Product Price */}
                <p className="text-xl font-semibold">{formatPrice(formal.price)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Formals;
