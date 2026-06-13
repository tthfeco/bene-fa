import RightText from "./RightText";
import ColorSelector from "./ColorSelector";
import SelectionPreview from "./SelectionPreview";
import doorColors from "../../../data/belteri/doorColors";

export default function RightSide({ colors, basePath, rightText }) {
  return (
    <div className="right-side-content">
      {rightText || <RightText />}
      <ColorSelector colors={colors || doorColors} />
      <SelectionPreview basePath={basePath || "/assets/doors/belteri/coloredDoors"} />
    </div>
  );
}