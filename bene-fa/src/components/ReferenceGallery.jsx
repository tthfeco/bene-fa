import React, { useState } from 'react';
import './ReferenceGallery.css';
import gallery1 from "../assets/Reference_gallery/Konyha_ferenczy.jpg";
import gallery2 from "../assets/Reference_gallery/Konyha_fullled.jpeg";
import gallery3 from "../assets/Reference_gallery/Konyha_oldalso.jpg";
import gallery4 from "../assets/Reference_gallery/Konyha_ferenczy.jpg";

const images = [
  { id: 1, src: gallery1, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
  { id: 2, src: gallery2, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
  { id: 3, src: gallery3, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
  { id: 4, src: gallery4, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
];

const ReferenceGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => {
          let className = 'gallery-image';
          if (index === currentIndex) className += ' active';
          else if (index === (currentIndex + 1) % images.length) className += ' next';
          else if (index === (currentIndex - 1 + images.length) % images.length) className += ' prev';

          return (
            <div key={image.id} className={className}>
              <img src={image.src} alt={image.title} />
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.text}</p>
              </div>
            </div>
          );
        })}
        <button className="nav-button prev-button" onClick={handlePrev}>&#8592;</button>
        <button className="nav-button next-button" onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};

export default ReferenceGallery;