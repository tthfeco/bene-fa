import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ReferenceComponent from "./components/Referencia.jsx";
import ReferenceGallery from "./components/ReferenceGallery.jsx";
import WeboldalLablec from "./components/WeboldalLablec.jsx";
import MainGallery from "./components/MainGallery.jsx";
import MainSwiper from "./components/MainSwiper.jsx";
import BelteriAjto from "./pages/BelteriAjto";
import Ablak from "./pages/Ablak";
import KulteriAjto from "./pages/KulteriAjto";
import ErkelyAjto from "./pages/ErkelyAjto";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <div style={{ height: "100vh" }}></div>
              <Categories />
              <ReferenceComponent />
              <MainSwiper />
              <WeboldalLablec />
            </>
          }
        />
        <Route path="/belteri-ajto" element={<BelteriAjto />} />
        <Route path="/ablak" element={<Ablak />} />
        <Route path="/kulteri-ajto" element={<KulteriAjto />} />
        <Route path="/erkely-ajto" element={<ErkelyAjto />} />
      </Routes>
    </Router>
  );
}

export default App;