import { useState } from "react";
import "./SubHeader.css";

export default function SubHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sub-header">
      <div className="sub-logo">BENE-FA KFT.</div>

      <div
        className={`sub-hamburger-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`sub-nav ${menuOpen ? "active" : ""}`}>
        <a href="#">Főoldal</a>
        <a href="#">Kapcsolat</a>
        <a href="#">Rólunk</a>
      </nav>
    </header>
  );
}
