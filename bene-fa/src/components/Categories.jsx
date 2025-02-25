import "./Categories.css";
import { useState } from "react";
import eloteto from '../assets/Categories_images/kategoria_eloteto.jpg';
import konyha from '../assets/Categories_images/kategoria_konyha.jpeg';
import ajto from '../assets/Categories_images/kategoria_ajto.jpg';
import ablak from '../assets/Categories_images/kategoria_ablak.jpg';
import redony from '../assets/Categories_images/kategoria_redony.jpg';

export default function Categories() {
  const [showDoorOptions, setShowDoorOptions] = useState(false);
  const [showOutdoorDoorOptions, setShowOutdoorDoorOptions] = useState(false);

  const categories = [
    { name: "ABLAK", description: "", link: "#", image: ablak },
    { name: "AJTÓ", description: "beltéri, kültéri", link: "#", image: ajto, hasSubmenu: "door" },
    { name: "REDŐNY", description: "", link: "#", image: redony },
    { name: "KONYHABÚTOR", description: "", link: "#", image: konyha },
    { name: "ELŐTETŐ PERGOLA", description: "", link: "#", image: eloteto },
  ];

  return (
    <section className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className="category-extra"></div>
          <div
            className="category-image"
            onMouseEnter={() => {
              if (category.hasSubmenu === "door") setShowDoorOptions(true);
            }}
            onMouseLeave={() => {
              if (category.hasSubmenu === "door") setShowDoorOptions(false);
            }}
          >
            {category.image && <img src={category.image} alt={category.name} />}
            <a href={category.link} className="category-arrow">➜</a>

            {/* AJTÓ ALMENÜ */}
            {category.hasSubmenu === "door" && showDoorOptions && (
              <div className="submenu">
                <a href="#">Beltéri ajtó</a>
                <div
                  className="submenu-item"
                  onMouseEnter={() => setShowOutdoorDoorOptions(true)}
                  onMouseLeave={() => setShowOutdoorDoorOptions(false)}
                >
                  Kültéri ajtó
                  {showOutdoorDoorOptions && (
                    <div className="submenu second-level">
                      <a href="#">Bejárati</a>
                      <a href="#">Erkélyajtó</a>
                      <a href="#">Tolóajtó</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="category-text">
            <h3>{category.name}</h3>
            {category.description && <p>{category.description}</p>}
          </div>
        </div>
      ))}
    </section>
  );
}