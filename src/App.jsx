import "./style.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchListPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/watchlistpage" element={<WatchlistPage />} />
      </Routes>
    </>
  );
}
