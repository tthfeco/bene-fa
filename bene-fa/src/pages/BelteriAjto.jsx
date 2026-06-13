import "./BelteriAjto.css";
import SubHeader from "../components/SubHeader";
import LargePreview from "../components/subPages/belteriAjto/LargePreview.jsx";
import SwiperLeft from "../components/subPages/belteriAjto/SwiperLeft";
import RightSide from "../components/subPages/belteriAjto/RightSide.jsx";
import mainDoors from "../data/belteri/mainDoors.js";

export default function BelteriAjto() {
  return (
    <div className="interior-door-page">
      <SubHeader />
      <div className="interior-door-container">
        <div className="leftSide">
          <div className="leftSide-inner">
            <LargePreview items={mainDoors} />
            <SwiperLeft items={mainDoors} />
          </div>
        </div>
        <div className="rightSide">
          <RightSide />
        </div>
      </div>
    </div>
  );
}