import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ReferenceComponent from "./components/Referencia.jsx";
import ReferenceGallery from "./components/ReferenceGallery.jsx";

function App() {  
  return (
    <div style={{ margin: 0, padding: 0, overflowX: "hidden", width: "100vw" }}>
      <Header />
      <Banner />      
      <div style={{ height: "100vh" }}></div> {/* Üres hely a banner után */}
      <Categories />
      <ReferenceComponent />
      <div style={{ height: "100vh" }}></div> {/* Üres hely a banner után */}
      <ReferenceGallery />
    </div>
  );
}

export default App;
