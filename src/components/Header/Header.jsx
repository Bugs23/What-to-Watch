import "./Header.css";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__nav__link link ${
                isActive ? "active-link" : "inactive-link"
              }`
            }
          >
            <h1 className="header__nav__title">Find your film</h1>
          </NavLink>
          <NavLink
            to="/watchlistpage"
            className={({ isActive }) =>
              `header__nav__link link ${
                isActive ? "active-link" : "inactive-link"
              }`
            }
          >
            My Watchlist
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
