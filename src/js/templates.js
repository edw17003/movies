export function buildMovieDetail(movie) {
    return `
    <div class="movie-detail">
        <h2>${movie.Title}</h2>
        <p>Year: ${movie.Year}</p>
        <p>Rated: ${movie.Rated}</p>
        <p>Runtime: ${movie.Runtime}</p>
        <p>Genre: ${movie.Genre}</p>
        <p>Director: ${movie.Director}</p>
        <p>Writer: ${movie.Writer}</p>
        <p>Actors: ${movie.Actors}</p>
        <p>Plot: ${movie.Plot}</p>
        <p>Language: ${movie.Language}</p>
        <p>Country: ${movie.Country}</p>
        <p>Awards: ${movie.Awards}</p>
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
        <div class="images-container">
          ${movie.Images.map(imageUrl => `<img src="${imageUrl}" alt="${movie.Title} Image">`).join('')}
        </div>
      </div>
      `
  }
  

export function buildMovieCard(movie) {
    return `
    <div class="movie">
        <a href="movie_detail/index.html?imdbID=${movie.imdbID}">
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
        </a>
    </div>
    `
}