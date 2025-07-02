import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../Products/products";  // Ensure this path is correct
import "./Barat.css";

const Barat = () => {
  const baratData = products.Barat;  // Get Barat data from products

  // State to manage the selected image index for each product
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(
    baratData.map(() => 0)  // Initialize state with 0 for each product
  );

  // Handle image change when clicking left
  const handlePrev = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex - 1 + baratData[index].images.length) % baratData[index].images.length;
      return newIndexes;
    });
  };

  // Handle image change when clicking right
  const handleNext = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex + 1) % baratData[index].images.length;
      return newIndexes;
    });
  };

  return (
    <div className="barat-container">
      <h1 className="text-2xl font-bold text-center my-6">Barat Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {baratData.map((barat, index) => {
          const images = barat.images || [barat.imageUrl];  // Default to imageUrl if images array is not available

          return (
            <div key={barat.id} className="barat-card relative">
              <div className="image-gallery relative">
                {/* Main Image */}
                <Link to={`/product/Barat/${barat.id}`}>
                  <img
                    src={images[selectedImageIndexes[index]]}
                    alt={barat.name}
                    className="w-full h-80 object-cover"
                  />
                </Link>

                {/* Left Arrow */}
                <button
                  className="absolute-button left-arrow"
                  onClick={() => handlePrev(index)} // Only affect this product
                >
                  &#10094;
                </button>

                {/* Right Arrow */}
                <button
                  className="absolute-button right-arrow"
                  onClick={() => handleNext(index)} // Only affect this product
                >
                  &#10095;
                </button>
              </div>
              <div className="p-4 text-center">
                {/* Product Name */}
                <h2 className="text-lg font-semibold">{barat.name}</h2>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Barat;
