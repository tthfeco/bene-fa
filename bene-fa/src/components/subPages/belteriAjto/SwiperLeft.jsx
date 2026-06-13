import { useState, useEffect } from "react";
import "./SwiperLeft.css";
import { useActiveDoor } from "../../../context/ActiveDoorContext.jsx";

export default function SwiperLeft({ items }) {
  const [startIndex, setStartIndex] = useState(0);
  const { setActiveDoorId } = useActiveDoor();

  const visibleCount = Math.min(3, items.length);

  useEffect(() => {
    const centerIndex = items.length === 1 ? 0 : (startIndex + 1) % items.length;
    setActiveDoorId(items[centerIndex].id);
  }, [startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const visibleDoors = Array.from({ length: visibleCount }, (_, i) =>
    items[(startIndex + i) % items.length]
  );

  const activeIndex = items.length === 1 ? 0 : (startIndex + 1) % items.length;

  return (
    <div className="swiper-left-wrapper">
      <div className="swiper-gallery">
        <button className="arrow up" onClick={handlePrev}>↑</button>
        <div className="swiper-images">
          {visibleDoors.map((door, index) => (
            <div
              key={`${door.id}-${index}`}
              className={`swiper-item ${index === Math.floor(visibleCount / 2) ? "active" : ""}`}
            >
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