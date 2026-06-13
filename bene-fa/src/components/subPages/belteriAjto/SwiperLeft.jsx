import { useState, useEffect } from "react";
import "./SwiperLeft.css";
import { useActiveDoor } from "../../../context/ActiveDoorContext.jsx";

export default function SwiperLeft({ items }) {
  const [startIndex, setStartIndex] = useState(0);
  const { setActiveDoorId } = useActiveDoor();

  useEffect(() => {
    const centerIndex = (startIndex + 1) % items.length;
    setActiveDoorId(items[centerIndex].id);
  }, [startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const visibleDoors = [
    items[startIndex % items.length],
    items[(startIndex + 1) % items.length],
    items[(startIndex + 2) % items.length],
  ];

  const activeIndex = (startIndex + 1) % items.length;

  return (
    <div className="swiper-left-wrapper">
      <div className="swiper-gallery">
        <button className="arrow up" onClick={handlePrev}>↑</button>
        <div className="swiper-images">
          {visibleDoors.map((door, index) => (
            <div key={door.id} className={`swiper-item ${index === 1 ? "active" : ""}`}>
              <img src={door.image} alt={`${door.id}`} />
            </div>
          ))}
        </div>
        <button className="arrow down" onClick={handleNext}>↓</button>
      </div>
      <div className="swiper-counter">
        {activeIndex + 1}/{items.length}
      </div>
    </div>
  );
}