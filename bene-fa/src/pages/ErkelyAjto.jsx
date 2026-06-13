import "./ErkelyAjto.css";
import SubHeader from "../components/SubHeader";
import LargePreview from "../components/subPages/belteriAjto/LargePreview.jsx";
import SwiperLeft from "../components/subPages/belteriAjto/SwiperLeft";
import RightSide from "../components/subPages/belteriAjto/RightSide.jsx";
import mainDoors from "../data/erkely/mainDoors.js";
import doorColors from "../data/erkely/doorColors.js";
import RightTextErkely from "../components/subPages/erkely/RightText.jsx";

export default function ErkelyAjto() {
  return (
    <div className="erkely-ajto-page">
      <SubHeader />
      <div className="interior-door-container">
        <div className="leftSide">
          <div className="leftSide-inner">
            <LargePreview items={mainDoors} />
            <SwiperLeft items={mainDoors} />
          </div>
        </div>
        <div className="rightSide">
          <RightSide
            colors={doorColors}
            basePath="/assets/doors/erkely/coloredBalcony"
            rightText={<RightTextErkely />}
          />
        </div>
      </div>
    </div>
  );
}