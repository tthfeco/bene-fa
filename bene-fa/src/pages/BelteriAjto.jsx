import SubHeader from "../components/SubHeader.jsx";
import SwiperLeft from "../components/subPages/belteriAjto/SwiperLeft.jsx";
import "./BelteriAjto.css";

export default function BelteriAjto() {
  return (
    <div className="interior-door-page">
      <SubHeader />
      <div className="interior-door-container">
        <div className="leftSide">
            <SwiperLeft/>    
        </div>
        <div className="rightSide"></div>
      </div>
    </div>
  );
}
