import { useActiveDoor } from "../../../context/ActiveDoorContext";
import "./LargePreview.css";

export default function LargePreview({ items }) {
  const { activeDoorId } = useActiveDoor();
  const activeItem = items.find((item) => item.id === activeDoorId);
  if (!activeItem) return null;

  return (
    <div className="large-preview-wrapper">
      <img src={activeItem.image} alt={`${activeItem.id}`} />
    </div>
  );
}