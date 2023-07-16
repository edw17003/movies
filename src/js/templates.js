export function buildMovieDetail(movie) {
    const firstImage = movie.Images[0];
    return `
        <div class="info">
            <img src=${movie.Poster} class="poster">
            <div>
                <h2>${movie.Title}</h2>
                <div class="rating">
                    <img src="https://dl.dropbox.com/s/c0olu3aadxcm3p7/star-icon.svg?raw=1">
                    <h4>${movie.imdbRating}</h4>
                </div> 
                <div class="details">
                    <span>${movie.Rated}</span>
                    <span>${movie.Year}</span>
                    <span>${movie.Runtime}</span>
                </div>
                <div class="genre">
                    <div>${movie.Genre.split(",").join("</div><div>")}</div>
                </div>   
            </div>
        </div>
        <h3>Plot:</h3>
        <p>${movie.Plot}</p>
        <h3>Cast:</h3>
        <p>${movie.Actors}</p>
        <h3>Awards:</h3>
        <p>${movie.Awards}</p>
        <h3>Country:</h3>
        <p>${movie.Country}</p>
        <h3>Language:</h3>
        <p>${movie.Language}</p>
        <div class="images-container">
            ${movie.Images.map(imageUrl => `<img movie-enlargable src="${imageUrl}" alt="${movie.Title} Image">`).join('')}
        </div>
    `;
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