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
  { src: KonyhaFerenczy, title: "Ferenczy Konyha", text: "Modern konyhabútor dizájn" },
  { src: Ajto1, title: "Beltéri Ajtó 1", text: "Elegáns és minimalista ajtó" },
  { src: KonyhaOldalso, title: "Oldalsó Konyhai Nézet", text: "Konyhabútor oldalnézetből" },
  { src: Ajto2, title: "Beltéri Ajtó 2", text: "Klasszikus fa ajtó stílus" },
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

  const visibleSlidesCount = Math.min(4, images.length);

  return (
    <div className="swiper-container">
      <button className="custom-button left" onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" />
      </button>

      <div className="swiper-wrapper">
        {[...Array(visibleSlidesCount)].map((_, offset) => {
          const image = getImage(offset);
          return (
            <div
              key={offset}
              className={`swiper-slide-content ${offset === 1 ? "large" : "small"}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              {(offset === 0 || offset === 2) && <div className="prios"></div>}
              <div className="image-info">
                <div className="image-title">{image.title}</div>
                <div className="image-text">{image.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="custom-button right" onClick={nextSlide}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
};

export default MainSwiper;
