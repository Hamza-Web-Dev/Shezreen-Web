import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../Products/products";  // Ensure this path is correct
import "./Walimah.css";

const Walimah = () => {
  const walimahData = products.Walimah;  // Get Walimah data from products

  // State to manage the selected image index for each product
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(
    walimahData.map(() => 0)  // Initialize state with 0 for each product
  );

  // Handle image change when clicking left
  const handlePrev = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex - 1 + walimahData[index].images.length) % walimahData[index].images.length;
      return newIndexes;
    });
  };

  // Handle image change when clicking right
  const handleNext = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex + 1) % walimahData[index].images.length;
      return newIndexes;
    });
  };

  return (
    <div className="walimah-container">
      <h1 className="text-2xl font-bold text-center my-6">Walimah Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {walimahData.map((walimah, index) => {
          const images = walimah.images || [walimah.imageUrl];  // Default to imageUrl if images array is not available

          return (
            <div key={walimah.id} className="walimah-card relative">
              <div className="image-gallery relative">
                {/* Main Image */}
                <Link to={`/product/Walimah/${walimah.id}`}>
                  <img
                    src={images[selectedImageIndexes[index]]}
                    alt={walimah.name}
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
                <h2 className="text-lg font-semibold">{walimah.name}</h2>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Walimah;
