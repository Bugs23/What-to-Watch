import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="header__nav__link link">
            <h1 className="header__nav__title">Find your film</h1>
          </Link>
          <Link to="/watchlistpage" className="header__nav__link link">
            My Watchlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
