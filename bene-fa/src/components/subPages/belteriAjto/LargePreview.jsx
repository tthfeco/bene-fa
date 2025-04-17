import { useActiveDoor } from "../../../context/ActiveDoorContext";
import mainDoors from "../../../data/belteri/mainDoors";
import "./LargePreview.css";

export default function LargePreview() {
  const { activeDoorId } = useActiveDoor();

  const activeDoor = mainDoors.find((door) => door.id === activeDoorId);

  if (!activeDoor) return null;

  return (
    <div className="large-preview-wrapper">
      <img src={activeDoor.image} alt={`Ajtó ${activeDoor.id}`} />
    </div>
  );
}
