import "./Ablak.css";
import SubHeader from "../components/SubHeader";
import LargePreview from "../components/subPages/belteriAjto/LargePreview.jsx";
import SwiperLeft from "../components/subPages/belteriAjto/SwiperLeft";
import RightSide from "../components/subPages/belteriAjto/RightSide.jsx";
import mainWindows from "../data/ablak/mainWindows.js";
import windowColors from "../data/ablak/windowColors.js";

export default function Ablak() {
  return (
    <div className="ablak-page">
      <SubHeader />
      <div className="interior-door-container">
        <div className="leftSide">
          <div className="leftSide-inner">
            <LargePreview items={mainWindows} />
            <SwiperLeft items={mainWindows} />
          </div>
        </div>
        <div className="rightSide">
          <RightSide
            colors={windowColors}
            basePath="/assets/doors/ablak/coloredWindows"
          />
        </div>
      </div>
    </div>
  );
}