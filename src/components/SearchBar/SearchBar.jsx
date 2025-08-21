import "./SearchBar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="container">
        <form className="search-bar__form">
          <FaMagnifyingGlass className="search-bar__icon" />
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search for a movie"
          />
          <button className="search-bar__button" name="search">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
