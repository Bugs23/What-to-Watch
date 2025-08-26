export function addToWatchlist(movie) {
  let watchlist = getWatchlist();
  if (!watchlist.some((newMovie) => newMovie.imdbID === movie.imdbID)) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
}

export function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
}
