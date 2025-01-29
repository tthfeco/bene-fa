import "./Banner.css";
import bannerImage from "../assets/banner.jpg"; 

export default function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h1>BENE-FA Kft.</h1>
        <p>
        A BENE-FA Kft. családi vállalkozásként indult 1995-ben, és azóta is
        szívvel-lélekkel dolgozunk azon, hogy ügyfeleink számára a legjobb
        megoldásokat nyújtsuk. Legyen szó egyedi fa- vagy műanyag
        nyílászáróról, redőnyözésről, konyha- illetve egyéb bútorokról, előtetőről vagy pergoláról, mi mindig az Ön igényeit tartjuk szem előtt.
        Célunk, hogy mind cégek, mind magánszemélyek számára kimagasló
        minőséget biztosítsunk, minden termékünkkel a kényelmet és az
        esztétikumot garantálva. Nálunk az ügyfél elégedettsége az első,
        és ezt több, mint három évtizedes tapasztalatunkra alapozzuk.   
        </p>
        <a href="#" className="banner-button">Tudj meg többet!</a>
      </div>
    </div>
  );
}
