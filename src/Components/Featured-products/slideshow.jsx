import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slideshow.css"; // Import the external CSS file

const Slideshow = () => {
  return (
    <div className="slideshow-container"> {/* Class name for the main container */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="slide">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%2FIMG_9103.jpg?alt=media&token=e6ab80b4-6467-4032-849b-cc74e14b7996"
              alt="Slide 1"
              className="slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img
              src="https://www.republicbespoke.com/cdn/shop/files/2nd.jpg?v=1727953602"
              alt="Slide 2"
              className="slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img
              src="https://www.republicbespoke.com/cdn/shop/files/desktop_4_after_4_days.jpg?v=1727077448"
              alt="Slide 3"
              className="slide-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slideshow;
