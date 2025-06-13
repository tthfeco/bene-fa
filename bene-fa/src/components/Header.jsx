import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">BENE-FA KFT.</div>

      {/* Hamburger ikon */}
      <div
        className={`hamburger-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigációs menü */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#">Főoldal</a>
        <a href="#">Kapcsolat</a>
        <a href="#">Rólunk</a>
      </nav>
    </header>
  );
}
