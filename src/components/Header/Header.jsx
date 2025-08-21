import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Find your film</h1>
      <a href="/watchlist" className="header__link">
        My Watchlist
      </a>
    </header>
  );
}
