import RightText from "./RightText";
import ColorSelector from "./ColorSelector";
import SelectionPreview from "./SelectionPreview";

export default function RightSide() {
    return (
      <div className="right-side-content">
        <RightText />
        <ColorSelector />
        <SelectionPreview />
      </div>
    );
  };
