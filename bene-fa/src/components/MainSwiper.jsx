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

  const getImage = (offset) => {
    return images[(index + offset) % images.length];
  };

  return (
    <div className="swiper-container">
      <button className="swiper-button-prev" onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" />
      </button>

      <div className="swiper-wrapper">
        {[0, 1, 2, 3].map((offset) => (
          <div key={offset} className={`swiper-slide-content ${offset === 1 ? "large" : "small"}`} style={{ backgroundImage: `url(${getImage(offset).src})` }}>
            <div className="image-text">{getImage(offset).text}</div>
          </div>
        ))}
      </div>

      <button className="swiper-button-next" onClick={nextSlide}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
};

export default MainSwiper;
