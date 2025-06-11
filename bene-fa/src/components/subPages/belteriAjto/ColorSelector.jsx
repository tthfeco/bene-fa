import "./ColorSelector.css";
import doorColors from "../../../data/belteri/doorColors";

export default function ColorSelector() {
  const firstRow = doorColors.slice(0, 8);
  const secondRow = doorColors.slice(8);

  return (
    <div className="color-selector">
      <div className="color-row">
        {firstRow.map((color) => (
          <div key={color.id} className="color-option">
            <img src={color.image} alt={`Color ${color.id}`} />
          </div>
        ))}
      </div>
      <div className="color-row">
        {secondRow.map((color) => (
          <div key={color.id} className="color-option">
            <img src={color.image} alt={`Color ${color.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
