import "./BelteriAjto.css";
import SubHeader from "../components/SubHeader";
import LargePreview from "../components/subPages/belteriAjto/LargePreview.jsx";
import SwiperLeft from "../components/subPages/belteriAjto/SwiperLeft";

export default function BelteriAjto() {
  return (
    <div className="interior-door-page">
      <SubHeader />
      <div className="interior-door-container">
      <div className="leftSide">
        <div className="leftSide-inner">
            <LargePreview />
            <SwiperLeft />
        </div>  
        </div>
        <div className="rightSide">
          {/* Ide jön a jobb oldali tartalom */}
        </div>
      </div>
    </div>
  );
}
