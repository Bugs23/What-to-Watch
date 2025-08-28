import { Link } from "react-router-dom";
// import { getWatchlist } from "../utils/addToWatchlist";

import EmptyPage from "../components/EmptyPage/EmptyPage";
import MovieCard from "../components/MovieCard/MovieCard";

import { IoAddCircle } from "react-icons/io5";

export default function WatchlistPage({ watchlist, removeFromWatchlist }) {
  const currentWatchlist = watchlist;

  const movieCardElements = currentWatchlist.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movie={movie}
      watchlist={watchlist}
      isInWatchlist={true}
      removeFromWatchlist={removeFromWatchlist}
    />
  ));

  return (
    <>
      {currentWatchlist.length > 0 ? (
        <div className="movie-list">{movieCardElements}</div>
      ) : (
        <EmptyPage>
          <h2 className="empty-page__message">
            Your watchlist is looking a little empty...
          </h2>
          <Link to="/" className="link">
            <div className="empty-page__sub-message">
              <IoAddCircle size={"30px"} />
              <h3 className="empty-page__sub-message__message">
                Let’s add some movies!
              </h3>
            </div>
          </Link>
        </EmptyPage>
      )}
    </>
  );
}
