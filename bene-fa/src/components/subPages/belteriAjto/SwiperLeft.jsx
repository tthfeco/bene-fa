import { useState, useEffect } from "react";
import "./SwiperLeft.css";
import mainDoors from "../../../data/belteri/mainDoors.js";
import { useActiveDoor } from "../../../context/ActiveDoorContext.jsx";

export default function SwiperLeft() {
  const [startIndex, setStartIndex] = useState(0);
  const { setActiveDoorId } = useActiveDoor();

  useEffect(() => {
    const centerIndex = (startIndex + 1) % mainDoors.length;
    setActiveDoorId(mainDoors[centerIndex].id);
  }, [startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - 1 + mainDoors.length) % mainDoors.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % mainDoors.length);
  };

  const visibleDoors = [
    mainDoors[startIndex % mainDoors.length],
    mainDoors[(startIndex + 1) % mainDoors.length],
    mainDoors[(startIndex + 2) % mainDoors.length],
  ];

  const activeIndex = (startIndex + 1) % mainDoors.length;

  return (
    <div className="swiper-left-wrapper">
      <div className="arrow-container">
        <button className="arrow up" onClick={handleNext}>↑</button>

        <div className="swiper-gallery">
          <div className="swiper-images">
            {visibleDoors.map((door, index) => (
              <div
                key={door.id}
                className={`swiper-item ${index === 1 ? "active" : ""}`}
              >
                <img src={door.image} alt={`Ajtó ${door.id}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow down" onClick={handlePrev}>↓</button>
      </div>

      <div className="swiper-counter">
        {activeIndex + 1}/{mainDoors.length}
      </div>
    </div>
  );
}
