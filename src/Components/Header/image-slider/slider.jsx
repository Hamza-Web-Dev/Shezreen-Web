import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css"; // Import the external CSS file

const Slider = () => {
  return (
    <div className="slideshow-container"> {/* Class name for the main container */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="slide">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FPicsart_25-02-12_17-28-50-501.jpg?alt=media&token=4ab4e087-e714-4aa0-ad98-1c6658838cce"
              alt="Slide 1"
              className="slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FPicsart_25-02-11_13-18-52-895.jpg?alt=media&token=ebcd6737-42f1-458f-8e5a-cf4364aa0333"
              alt="Slide 2"
              className="slide-image img3"
            />
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Slider;