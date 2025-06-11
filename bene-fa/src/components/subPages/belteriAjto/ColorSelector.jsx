import "./ColorSelector.css";
import doorColors from "../../../data/belteri/doorColors";
import { useActiveDoorColor } from "../../../context/ActiveDoorColorContext";

export default function ColorSelector() {
  const { activeColorId, setActiveColorId } = useActiveDoorColor();

  const firstRow = doorColors.slice(0, 8);
  const secondRow = doorColors.slice(8);

  const renderRow = (row) =>
    row.map((color) => (
      <div
        key={color.id}
        className={`color-option ${activeColorId === color.id ? "active" : ""}`}
        onClick={() => setActiveColorId(color.id)}
      >
        <img src={color.image} alt={`Color ${color.id}`} />
      </div>
    ));

  return (
    <div className="color-selector">
      <div className="color-row">{renderRow(firstRow)}</div>
      <div className="color-row">{renderRow(secondRow)}</div>
    </div>
  );
}
