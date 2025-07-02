import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from "../../../Products/products";
import Notification from "../../Homepage/notification";
import './detailpage.css';

const ProductDetail = ({ addToCart }) => {
  // Function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  const { categoryName, id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("Normal"); // Default size is "Normal"
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const selectedCategory = products[categoryName];
    const selectedProduct = selectedCategory?.find((prod) => prod.id === parseInt(id));
    setProduct(selectedProduct);

    if (selectedProduct && selectedProduct.images?.length > 0) {
      setMainImage(selectedProduct.images[0]);
    }

    if (selectedProduct) {
      setPrice(selectedProduct.price);
    }
  }, [categoryName, id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  const handleSizeChartToggle = () => {
    setShowSizeChart((prevState) => !prevState);
  };

  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);

    if (selected === "Korean Raw Silk") {
      setPrice(product.price - 5000);
    } else {
      setPrice(product.price);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: `${product.id}-${selectedSize}`,  // Using selectedSize, which defaults to "Normal"
      name: product.name,
      price: price,
      quantity: quantity,
      image: mainImage,
      size: selectedSize,
      option: selectedOption || 'No Option',
    };

    addToCart(cartItem);

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleBuyNow = () => {
    const message = `Hello, I am interested in purchasing: 
    - Product: ${product.name}
    - Size: ${selectedSize}
    - Option: ${selectedOption || 'No Option'}
    - Quantity: ${quantity}
    - Price: ${price}/-PKR each
    Total: ${price * quantity}/-PKR`;

    const whatsappURL = `https://wa.me/923250121119?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const handleCallForInquiry = () => {
    const message = `Hello, I am interested in inquiring about the product: ${product.name}.`;
    const whatsappURL = `https://wa.me/923250121119?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const { shirt, trouser, Dupatta, pieces } = product || {};

  return (
    <div className="product-detail-container">
      {showNotification && <Notification image={mainImage} message="Added to cart" />}

      <Link to={`/${categoryName}`} className="back-link">
        &#8592; Back to {categoryName}
      </Link>

      <div className="product-detail-content">
        <div className="product-image-container">
          <img
            src={mainImage || "default_image_path"}
            alt={product.name}
            className="product-main-image"
          />
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>

          {/* Conditionally render price */}
          {price > 0 ? (
            <p className="product-price">{price}/-PKR</p>
          ) : null}

          {/* Conditionally render sizes section */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="product-sizes">
              <p className="size-label">Sizes:</p>
              <div className="size-buttons">
                {product.sizes?.map((size, index) => (
                  <button
                    key={`${size}-${index}`}  // Using size + index for uniqueness
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Only render the 'View Size Chart' button if sizes exist */}
          {product.sizes && product.sizes.length > 0 && (
            <button
              className="add-to-cart-btn1"
              onClick={handleSizeChartToggle}
            >
              View Size Chart
            </button>
          )}

          {/* Shirt Size Chart Modal with two images */}
          {showSizeChart && (
            <div className="size-chart-overlay">
              <div className="size-chart-modal">
                <button
                  className="close-size-chart-btn"
                  onClick={handleSizeChartToggle}
                >
                  &times;
                </button>
                {/* First Image */}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FSizechart.png?alt=media&token=eec8ae7f-dd6b-4223-821c-34ff893284db"
                  alt="Shirt Size Chart"
                  className="size-chart-image"
                />
                <div className='Line'></div>
                {/* Second Image */}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FWhatsApp%20Image%202025-02-12%20at%2022.51.22.jpeg?alt=media&token=0f34a074-a369-4658-926e-12da735894de" // Add the URL for the second size chart image
                  alt="Trouser Size Chart"
                  className="size-chart-image"
                />
                <div className='Line'></div>
              </div>
            </div>
          )}

          {product.options && product.options.length > 0 && (
            <div className="product-options">
              <p className="option-label">Options:</p>
              <select
                className="option-dropdown"
                value={selectedOption || ''}
                onChange={handleOptionChange}
              >
                <option value="" disabled>Select an option</option>
                {product.options.map((option, index) => (
                  <option key={`${option}-${index}`} value={option}> {/* Using option + index */}
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Conditionally render action buttons */}
          {price > 0 ? (
            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="buy-now-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          ) : (
            <div className="action-buttons">
              <button className="buy-now-btn" onClick={handleCallForInquiry}>
                Call for Inquiry
              </button>
            </div>
          )}

          <div className="product-disclaimer">
            {shirt && <p><strong>Shirt:</strong> {shirt}</p>}
            {trouser && <p><strong>Trouser:</strong> {trouser}</p>}
            {Dupatta && <p><strong>Dupatta:</strong> {Dupatta}</p>}
            {pieces && <p><strong>Pieces:</strong> {pieces}</p>}
          </div>

          <h2>Description:</h2>
          <p className="product-description">{product.description}</p>
        </div>
      </div>

      <div className="small-images-gallery">
        {product.images?.slice(1).map((image, index) => (
          <img
            key={`${index}-${image}`}  // Combining index and image for unique keys
            src={image}
            alt={`Small image ${index + 1}`}
            className="small-image"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>

      <div className="random-products">
        <h2 className="you-may-like-heading">You May Also Like</h2>
        <div className="random-products-gallery">
          {shuffleArray(
            Object.entries(products)
              .flatMap(([categoryName, categoryProducts]) =>
                categoryProducts.map((product) => ({
                  ...product,
                  categoryName,
                }))
              )
          )
            .slice(0, 4)
            .map((randomProduct, index) => (
              <div key={`${randomProduct.id}-${index}`} className="random-product"> {/* Ensuring unique key */}
                <Link
                  to={`/product/${randomProduct.categoryName}/${randomProduct.id}`}
                  className="random-product-link"
                >
                  <img
                    src={randomProduct.images[0] || "default_image_path"}
                    alt={randomProduct.name}
                    className="random-product-image"
                  />
                  <h3 className="random-product-name">{randomProduct.name}</h3>
                  <p className="random-product-price">{randomProduct.price}/-PKR</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
