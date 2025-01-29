import "./Banner.css";
import bannerImage from "../assets/d-27.jpg";

export default function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h1>BENE-FA Kft.</h1>
        <p>
          A BENE-FA Kft. családi vállalkozásként indult 1995-ben, és azóta is
          szívvel-lélekkel dolgozunk azon, hogy ügyfeleink számára a legjobb
          megoldásokat nyújtsuk.
        </p>
        <a href="#" className="banner-button">Tudj meg többet!</a>
      </div>
    </div>
  );
}
