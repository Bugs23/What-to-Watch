import "./MovieCard.css";
// import { addToWatchlist, getWatchlist } from "../../utils/addToWatchlist";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";

export default function MovieCard({
  movie,
  addToWatchlist,
  watchlist,
  isInWatchlist,
}) {
  const currentWatchlist = watchlist;

  return (
    <div className="container">
      <article className="movie-card">
        {/* Poster */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-card__poster"
        />

        {/* Content */}
        <div className="movie-card__content">
          {/* Title + Rating */}
          <div className="movie-card__header">
            <h2 className="movie-card__title">{movie.Title}</h2>
            <div className="movie-card__rating">
              <FaStar className="movie-card__rating-icon" />
              <span className="movie-card__rating-value">
                {movie.imdbRating}
              </span>
            </div>
          </div>

          {/* Meta Info */}
          <div className="movie-card__meta">
            <span className="movie-card__year">
              <strong>{movie.Year}</strong>
            </span>
            <span className="movie-card__duration">{movie.Runtime}</span>
            <span className="movie-card__genre">{movie.Genre}</span>
            {!isInWatchlist ? (
              <button
                className="movie-card__watchlist"
                onClick={() => addToWatchlist(movie)}
              >
                <FaPlus className="movie-card__watchlist-icon" /> Watchlist
              </button>
            ) : (
              <button
                className="movie-card__watchlist"
                onClick={() => addToWatchlist(movie)}
              >
                <FaMinus className="movie-card__watchlist-icon" /> Remove
              </button>
            )}
          </div>

          {/* Description */}
          <p className="movie-card__description">{movie.Plot}</p>
        </div>
      </article>
    </div>
  );
}
