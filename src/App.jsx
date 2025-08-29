import "./style.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components and Pages
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";

export default function App() {
  // State to manage the watchlist, initialized from localStorage if available
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  // Add movie to watchlist
  function addToWatchlist(movie) {
    // Only add if the movie is not already in the watchlist
    if (!watchlist.some((newMovie) => newMovie.imdbID === movie.imdbID)) {
      // Add all the movies in the watchlist plus the new one
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  }

  // Remove movie from watchlist
  function removeFromWatchlist(movie) {
    // Only remove if the movie is already in the watchlist
    if (watchlist.some((newMovie) => newMovie.imdbID === movie.imdbID)) {
      // Filter out the movie to be removed
      const updatedWatchlist = watchlist.filter(
        (currentMovie) => currentMovie.imdbID !== movie.imdbID
      );
      // Update state and localStorage
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
            <SearchPage
              watchlist={watchlist}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route
          path="/watchlistpage"
          element={
            <WatchlistPage
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
      </Routes>
    </>
  );
}
