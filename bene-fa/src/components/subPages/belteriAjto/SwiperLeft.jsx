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

  return (
    <div className="swiper-left-wrapper">
      <div className="leftContent"></div>

      <div className="rightContent">
        <button className="arrow up" onClick={handlePrev}>↑</button>
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
        <button className="arrow down" onClick={handleNext}>↓</button>
      </div>
    </div>
  );
}
