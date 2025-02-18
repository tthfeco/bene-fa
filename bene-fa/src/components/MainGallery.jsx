import React, { useState } from "react";
import "./MainGallery.css";
import leftArrow from "../assets/arrows/left_arrow.svg";
import rightArrow from "../assets/arrows/right_arrow.svg";

const images = [
  "../assets/Reference_gallery/Konyha_ferenczy.jpg",
  "../assets/Reference_gallery/ajto1.jpg",
  "../assets/Reference_gallery/Konyha_oldalso.jpg",
  "../assets/Reference_gallery/ajto2.jpg",
];

const MainGallery = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <button className="arrow left" onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" />
      </button>
      <div className="gallery-wrapper">
        {images.map((image, i) => {
          const position = (i - index + images.length) % images.length;
          return (
            <div
              key={i}
              className={`gallery-item ${position === 1 ? "active" : "inactive"} ${position === 0 || position === 2 ? "inward-rounded" : ""}`}
              style={{ 
                backgroundImage: `url(${image})`, 
                borderRadius: position === 0 || position === 2 ? "40px 40px 0px 40px" : "40px", 
                opacity: position === 1 ? 1 : 0.7 
              }}
            ></div>
          );
        })}
      </div>
      <button className="arrow right" onClick={nextSlide}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
};

export default MainGallery;
