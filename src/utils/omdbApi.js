const API_URL = "https://www.omdbapi.com/";

export async function getMovies(query) {
  try {
    const res = await fetch(
      `${API_URL}?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();

    // Check OMDb’s Response property
    if (data.Response === "False") {
      throw new Error(data.Error || "No movies found");
    }

    const fullMovieDetails = await Promise.all(
      data.Search.map((movie) =>
        fetch(
          `${API_URL}?i=${movie.imdbID}&apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }&plot=full`
        ).then((res) => res.json())
      )
    );

    // Return a fallback value ([]) as an empty array so “no movies found” is handled gracefully.
    return fullMovieDetails || [];
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
}
