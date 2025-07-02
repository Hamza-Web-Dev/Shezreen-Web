import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Homepage/navbar";
import Header from "./Components/Header/header";
import Search from "./Search-bar/search";
import Checkout from "./Components/Checkout/checkout";
import Bridals from "./Homepage/Bridal/bridals";
import Formals from "./Homepage/Formals/formals";
import Nikkah from "./Homepage/Bridal/nikkah";
import Walimah from "./Homepage/Bridal/walimah";
import Barat from "./Homepage/Bridal/barat";
import Saree from "./Homepage/Bridal/Saree";
import Shawls from "./Homepage/Shawls/shawls";
import WinterCollection from "./Homepage/WinterSmartCasuals/WinterSmartCasual";
import Footer from "./Components/footer";
import ProductDetail from "./Components/ProductDetailPage/detailpage";
import NewArrivalsSlider from "./Components/NewArrivals/newarrivals"; // Import the slider
import { HomePage } from "./HomePage";
import AboutUs from "./Homepage/AboutUS/aboutus";
import ContactUs from "./Homepage/Contact/contact";
import ReturnPolicy from "./Homepage/Return-Policy/return-policy";
import FAQs from "./Homepage/Faqs/faqs";
import TermsAndConditions from "./Homepage/TermsandCondition/termsandcondition";
import CheckoutFinal from "./Components/Checkout-final/checkout-final";
import WhatsAppButton from "./Components/Whatsapp/whatsapp";
import ScrollToTop from "./Components/ScrollToTop/scrolltotop.jsx";
import AllProductsPage from "./Components/Allproducts/AllProductsPage.jsx";

const App = () => {
  const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  // Update item quantity in cart
  const updateQuantity = (itemId, amount) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + amount) }
          : cartItem
      )
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        {/* Pass `totalItems` to the Search component */}
        <Search
          totalItems={totalItems}
          addToCart={addToCart}
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <NewArrivalsSlider />
                </>
              }
            />
            <Route path="/bridals" element={<Bridals />} />
            <Route path="/formals" element={<Formals />} />
            <Route path="/saree" element={<Saree />} />
            <Route path="/shawls" element={<Shawls />} />
            <Route path="/WinterCollection" element={<WinterCollection />} />
            <Route
              path="/product/:categoryName/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route path="/bridals/Walimah" element={<Walimah />} />
            <Route path="/bridals/Nikkah" element={<Nikkah />} />
            <Route path="/bridals/Barat" element={<Barat />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms-and-condition" element={<TermsAndConditions />} />
            <Route path="/"  element={<NewArrivalsSlider/>} />
            <Route path="/all-products" element={<AllProductsPage/>} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  totalPrice={totalPrice}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route
              path="/checkout-final"
              element={<CheckoutFinal cart={cart}  totalPrice={totalPrice} setCart={setCart}/>}
            />
          </Routes>
        </div>

        <WhatsAppButton />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
