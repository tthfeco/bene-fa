import "./Categories.css";
import eloteto from '../assets/Categories_images/kategoria_eloteto.jpg';
import konyha from '../assets/Categories_images/kategoria_konyha.jpeg';
import ajto from '../assets/Categories_images/kategoria_ajto.jpg';
import ablak from '../assets/Categories_images/kategoria_ablak.jpg';
import redony from '../assets/Categories_images/kategoria_redony.jpg';

export default function Categories() {
  const categories = [
    { name: "ABLAK", description: "", link: "#", image: ablak  },
    { name: "AJTÓ", description: "beltéri, kültéri", link: "#", image: ajto },
    { name: "REDŐNY", description: "", link: "#", image: redony  },
    { name: "KONYHABÚTOR", description: "", link: "#", image: konyha },
    { name: "ELŐTETŐ PERGOLA", description: "", link: "#", image: eloteto },
  ];

  return (
    <section className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className="category-image">
          {category.image && <img src={category.image} alt={category.name} />}
          <a href={category.link} className="category-arrow">➜</a>
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
