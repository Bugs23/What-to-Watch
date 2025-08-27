import "./style.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchListPage";

export default function App() {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  function addToWatchlist(movie) {
    if (!watchlist.some((newMovie) => newMovie.imdbID === movie.imdbID)) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage watchlist={watchlist} addToWatchlist={addToWatchlist} />
          }
        />
        <Route
          path="/watchlistpage"
          element={<WatchlistPage watchlist={watchlist} />}
        />
      </Routes>
    </>
  );
}
