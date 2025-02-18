import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ReferenceComponent from "./components/Referencia.jsx";
import ReferenceGallery from "./components/ReferenceGallery.jsx";
import WeboldalLablec from "./components/WeboldalLablec.jsx";
import MainGallery from "./components/MainGallery.jsx";

function App() {  
  return (
    <div style={{ margin: 0, padding: 0, overflowX: "hidden", width: "100vw" }}>
      <Header />
      <Banner />      
      <div style={{ height: "100vh" }}></div> {/* Üres hely a banner után */}
      <Categories />
      <ReferenceComponent />
      <MainGallery />
      <WeboldalLablec />
    </div>
  );
}

export default App;
