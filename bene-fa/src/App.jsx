// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ReferenceComponent from "./components/Referencia.jsx";
import ReferenceGallery from "./components/ReferenceGallery.jsx";
import WeboldalLablec from "./components/WeboldalLablec.jsx";
import MainGallery from "./components/MainGallery.jsx";
import MainSwiper from "./components/MainSwiper.jsx";
import BelteriAjto from "./pages/BelteriAjto"; // <-- új aloldal

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
      </Routes>
    </Router>
  );
}

export default App;
