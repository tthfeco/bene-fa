import { useActiveDoor } from "../../../context/ActiveDoorContext";
import { useActiveDoorColor } from "../../../context/ActiveDoorColorContext";
import "./SelectionPreview.css";

export default function SelectionPreview({ basePath }) {
  const { activeDoorId } = useActiveDoor();
  const { activeColorId } = useActiveDoorColor();

  if (!activeDoorId || !activeColorId) return null;

  const suffixes = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <div key={`${activeDoorId}-${activeColorId}`} className="selection-preview">
      {suffixes.map((suffix) => {
        const src = `${basePath}/${activeDoorId}/${activeDoorId}_${activeColorId}_${suffix}.svg`;
        return (
          <img
            key={suffix}
            src={src}
            alt={`${activeDoorId} - ${activeColorId} - ${suffix}`}
            onError={(e) => (e.target.style.display = "none")}
            className="preview-image"
          />
        );
      })}
    </div>
  );
}