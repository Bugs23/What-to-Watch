import "./style.css";

import { useState } from "react";
import { getMovies } from "./utils/omdbApi";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import StartExploring from "./components/StartExploring/StartExploring";
import MovieCard from "./components/MovieCard/MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  // Handle movie search
  async function handleSearch(query) {
    setError("");
    setMovies([]);

    const results = await getMovies(query);

    if (results.length === 0) {
      setError("No movies found");
    }

    setMovies(results);
    console.log(results);
  }

  const movieCardElements = movies.map((movie) => {
    return <MovieCard key={movie.imdbID} movie={movie} />;
  });

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {movies.length > 0 ? (
        <div className="movie-list">{movieCardElements}</div>
      ) : (
        <StartExploring />
      )}
    </>
  );
}
