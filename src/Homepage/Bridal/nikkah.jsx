import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from "../../../Products/products"; // Ensure this path is correct
import "./Nikkah.css";

const Nikkah = () => {
  const nikkahData = products.Nikkah; // Get Nikkah data from products

  // State to manage the selected image index for each product
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(
    nikkahData.map(() => 0) // Initialize state with 0 for each product
  );

  // Handle image change when clicking left
  const handlePrev = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex - 1 + nikkahData[index].images.length) % nikkahData[index].images.length;
      return newIndexes;
    });
  };

  // Handle image change when clicking right
  const handleNext = (index) => {
    setSelectedImageIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[index];
      newIndexes[index] = (currentIndex + 1) % nikkahData[index].images.length;
      return newIndexes;
    });
  };

  return (
    <div className="nikkah-container">
      <h1 className="text-2xl font-bold text-center my-6">Nikkah Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {nikkahData.map((nikkah, index) => {
          const images = nikkah.images || [nikkah.imageUrl]; // Default to imageUrl if images array is not available

          return (
            <div key={nikkah.id} className="nikkah-card relative">
              <div className="image-gallery relative">
                {/* Main Image */}
                <Link to={`/product/Nikkah/${nikkah.id}`}>
                  <img
                    src={images[selectedImageIndexes[index]]}
                    alt={nikkah.name}
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
                <h2 className="text-lg font-semibold">{nikkah.name}</h2>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nikkah;
