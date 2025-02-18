import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./MainSwiper.css";

import leftArrow from "../assets/arrows/left_arrow.svg";
import rightArrow from "../assets/arrows/right_arrow.svg";

import KonyhaFerenczy from "../assets/Reference_gallery/Konyha_ferenczy.jpg";
import Ajto1 from "../assets/Reference_gallery/ajto1.jpg";
import KonyhaOldalso from "../assets/Reference_gallery/Konyha_oldalso.jpg";
import Ajto2 from "../assets/Reference_gallery/ajto2.jpg";

const images = [
  { src: KonyhaFerenczy, text: "Ferenczy konyha" },
  { src: Ajto1, text: "Beltéri ajtó 1" },
  { src: KonyhaOldalso, text: "Oldalsó konyhai nézet" },
  { src: Ajto2, text: "Beltéri ajtó 2" },
];

const MainSwiper = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="swiper-container">
      <button className="swiper-button-prev" onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1.2}
        navigation
        loop
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className={`swiper-slide-content ${idx === index ? "large" : "small"}`} style={{ backgroundImage: `url(${image.src})` }}>
              <div className="image-text">{image.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-next" onClick={nextSlide}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
};

export default MainSwiper;
