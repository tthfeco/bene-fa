import "./Categories.css";

export default function Categories() {
  const categories = [
    { name: "ABLAK", description: "", link: "#" },
    { name: "AJTÓ", description: "beltéri, kültéri", link: "#" },
    { name: "REDŐNY", description: "", link: "#" },
    { name: "KONYHABÚTOR", description: "", link: "#" },
    { name: "ELŐTETŐ PERGOLA", description: "", link: "#" },
  ];

  return (
    <section className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className="category-image">
            {/* Később a megfelelő képeket behelyezed */}
          </div>
          <div className="category-text">
            <h3>{category.name}</h3>
            {category.description && <p>{category.description}</p>}
          </div>
          <a href={category.link} className="category-arrow">➜</a>
        </div>
      ))}
    </section>
  );
}
