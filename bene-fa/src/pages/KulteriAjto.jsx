import "./KulteriAjto.css";
import SubHeader from "../components/SubHeader";
import LargePreview from "../components/subPages/belteriAjto/LargePreview.jsx";
import SwiperLeft from "../components/subPages/belteriAjto/SwiperLeft";
import RightSide from "../components/subPages/belteriAjto/RightSide.jsx";
import mainDoors from "../data/kulteri/mainDoors.js";
import doorColors from "../data/kulteri/doorColors.js";
import RightTextKulteri from "../components/subPages/kulteri/RightText.jsx";

export default function KulteriAjto() {
  return (
    <div className="kulteri-ajto-page">
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
            basePath="/assets/doors/kulteri/coloredOutdoors"
            rightText={<RightTextKulteri />}
          />
        </div>
      </div>
    </div>
  );
}