import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">BENE-FA KFT.</div>

      {/* Hamburger ikon */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigációs menü, amely aktív osztályt kap ha a menü nyitva van */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#">Főoldal</a>
        <a href="#">Kapcsolat</a>
        <a href="#">Rólunk</a>
      </nav>
    </header>
  );
}
