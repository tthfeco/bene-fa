import { useActiveDoor } from "../../../context/ActiveDoorContext";
import mainWindows from "../../../data/ablak/mainWindows";
import "../../subPages/belteriAjto/LargePreview.css";

export default function LargePreviewAblak() {
  const { activeDoorId } = useActiveDoor();
  const activeWindow = mainWindows.find((w) => w.id === activeDoorId);
  if (!activeWindow) return null;

  return (
    <div className="large-preview-wrapper">
      <img src={activeWindow.image} alt={`Ablak ${activeWindow.id}`} />
    </div>
  );
}