import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">BENE-FA KFT.</div>
      <nav className="nav">
        <a href="#">Főoldal</a>
        <a href="#">Kapcsolat</a>
        <a href="#">Rólunk</a>
      </nav>
    </header>
  );
}
