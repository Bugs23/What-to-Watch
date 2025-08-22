import "./MovieCard.css";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function MovieCard() {
  return (
    <div className="container">
      <article className="movie-card">
        {/* Poster */}
        <img
          src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
          alt="Blade Runner"
          className="movie-card__poster"
        />

        {/* Content */}
        <div className="movie-card__content">
          {/* Title + Rating */}
          <div className="movie-card__header">
            <h2 className="movie-card__title">Blade Runner</h2>
            <div className="movie-card__rating">
              <FaStar className="movie-card__rating-icon" />
              <span className="movie-card__rating-value">8.1</span>
            </div>
          </div>

          {/* Meta Info */}
          <div className="movie-card__meta">
            <span className="movie-card__duration">117 min</span>
            <span className="movie-card__genre">Action, Drama, Sci-fi</span>
            <button className="movie-card__watchlist">
              <FaPlus className="movie-card__watchlist-icon" /> Watchlist
            </button>
          </div>

          {/* Description */}
          <p className="movie-card__description">
            A blade runner must pursue and terminate four replicants who stole a
            ship in space, and have returned to Earth to find their creator.
          </p>
        </div>
      </article>
    </div>
  );
}
