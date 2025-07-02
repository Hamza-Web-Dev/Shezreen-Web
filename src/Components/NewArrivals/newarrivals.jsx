import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./NewArrivalsSlider.css";
import Text from "../Text/text";

const NewArrivalsSlider = () => {
  const newArrivals = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9069-min.jpg?alt=media&token=d772c050-f0df-46cf-b987-cb985b4287d7",
      name: "Dilara",
      price: "Rs 12,000",
      link: "/product/Shawls/1",
      category: "Shawls",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9085-min.jpg?alt=media&token=c574b9d0-4dfd-4182-aebd-359d76c5bf8d",
      name: "Maren",
      price: "Rs 14,500",
      link: "/product/Shawls/2",
      category: "Shawls",
    },
    {
    image :
    "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9104-min.jpg?alt=media&token=2494eb10-fcfb-4aa4-91ca-4d914093c20c",
    name :"Maisy",
    price : "400000",
    link :"/product/Shawls/4",
    category : "Shawls",
    }
  ];

  return (
    <>
      <div className="new-arrivals-slider">
        <div className="new-arrivals-header">
          <h2 className="header-title">New Arrivals</h2>
          <Link to="/all-products" className="view-all">
            View All
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper-container"
        >
          {newArrivals.map((product, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="item">
                <Link to={product.link} className="product-link">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="item-image"
                  />
                  <div className="item-name">{product.name}</div>
                  <div className="item-price">{product.price}</div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Text />
    </>
  );
};

export default NewArrivalsSlider;
