import "./MovieCard.css";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import fallbackPoster from "/images/fallback-poster.png";

export default function MovieCard({
  movie,
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
}) {
  return (
    <div className="container">
      <article className="movie-card">
        {/* Poster */}
        <img
          src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : fallbackPoster
          }
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackPoster;
          }}
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

          {/* Movie Info */}
          <div className="movie-card__info">
            <div className="movie-card__info__meta">
              <span className="movie-card__year">{movie.Year}</span>
              <span className="movie-card__duration">{movie.Runtime}</span>
              <span className="movie-card__genre">{movie.Genre}</span>
            </div>
            <div className="movie-card__info__button-container">
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
                  onClick={() => removeFromWatchlist(movie)}
                >
                  <FaMinus className="movie-card__watchlist-icon" /> Remove
                </button>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="movie-card__description">{movie.Plot}</p>
        </div>
      </article>
    </div>
  );
}
