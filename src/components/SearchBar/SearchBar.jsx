import { useState } from "react";

import "./SearchBar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // If the search is empty, stop
    if (!query.trim()) return;
    onSearch(query);
    console.log(query);
  }

  return (
    <div className="search-bar">
      <div className="container">
        <form className="search-bar__form" onSubmit={handleSubmit}>
          <FaMagnifyingGlass className="search-bar__icon" />
          <input
            className="search-bar__input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie"
          />
          <button type="submit" className="search-bar__button" name="search">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
