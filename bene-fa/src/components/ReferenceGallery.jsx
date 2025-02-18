import React, { useState } from 'react';
import './ReferenceGallery.css';
import gallery1 from "../assets/Reference_gallery/Konyha_ferenczy.jpg";
import gallery2 from "../assets/Reference_gallery/ajto1.jpg";
import gallery3 from "../assets/Reference_gallery/Konyha_oldalso.jpg";
import gallery4 from "../assets/Reference_gallery/ajto2.jpg";

const images = [
  { id: 1, src: gallery1, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
  { id: 2, src: gallery2, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
  { id: 3, src: gallery3, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
  { id: 4, src: gallery4, title: 'LOREM IPSUM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tin' },
];

const ReferenceGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getDisplayImages = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    const nextNextIndex = (currentIndex + 2) % images.length;

    return [images[prevIndex], images[currentIndex], images[nextIndex], images[nextNextIndex]];
  };

  return (
    <div className={`gallery-container ${direction}`}>
      <button className="nav-button prev-button" onClick={handlePrev}>&#8592;</button>
      <div className="gallery">
        {getDisplayImages().map((image, index) => {
          let className = 'gallery-image';
          
          if (index === 1) className += ' active';
          else className += ' inactive';

          if (index === 0) className += ' left-inactive';  // Bal oldali kép
          if (index === 2) className += ' right-inactive'; // Jobb oldali kép

          return (
            <div key={image.id} className={className}>
              <div className="image-wrapper">
                <img src={image.src} alt={image.title} />
              </div>
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="nav-button next-button" onClick={handleNext}>&#8594;</button>
    </div>
  );
};

export default ReferenceGallery;
