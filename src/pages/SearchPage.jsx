import { useState } from "react";
import { getMovies } from "../utils/omdbApi";

import SearchBar from "../components/SearchBar/SearchBar";
import MovieCard from "../components/MovieCard/MovieCard";
import EmptyPage from "../components/EmptyPage/EmptyPage";
import { TbMovie } from "react-icons/tb";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  // Handle movie search
  async function handleSearch(query) {
    setError("");
    setMovies([]);

    const results = await getMovies(query);

    if (results.length === 0) {
      setError("No movies found");
    } else {
      setMovies(results);
    }
  }

  const movieCardElements = movies.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ));

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {movies.length > 0 ? (
        <div className="movie-list">{movieCardElements}</div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <EmptyPage>
          <TbMovie size={"120px"} />
          <h2 className="empty-page__message">Start Exploring</h2>
        </EmptyPage>
      )}
    </>
  );
}
