import "./style.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import StartExploring from "./components/StartExploring/StartExploring";

export default function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <StartExploring />
    </>
  );
}
