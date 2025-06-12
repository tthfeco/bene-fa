import { useActiveDoor } from "../../../context/ActiveDoorContext";
import { useActiveDoorColor } from "../../../context/ActiveDoorColorContext";
import "./SelectionPreview.css"; 

export default function SelectionPreview() {
  const { activeDoorId } = useActiveDoor();
  const { activeColorId } = useActiveDoorColor();

  if (!activeDoorId || !activeColorId) return null;

  const suffixes = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <div className="selection-preview">
      {suffixes.map((suffix) => {
        const src = `/src/assets/doors/belteri/coloredDoors/${activeDoorId}/${activeDoorId}_${activeColorId}_${suffix}.svg`;
        return (
          <img
            key={suffix}
            src={src}
            alt={`Ajtó ${activeDoorId} - Szín ${activeColorId} - ${suffix}`}
            onError={(e) => (e.target.style.display = "none")}
            className="preview-image"
          />
        );
      })}
    </div>
  );
}
