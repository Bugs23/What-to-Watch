import "./style.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import StartExploring from "./components/StartExploring/StartExploring";
import MovieCard from "./components/MovieCard/MovieCard";

export default function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <StartExploring />
      <div className="movie-list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}
