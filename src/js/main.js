import {getAllMovies} from './externalServices.js'
import {buildMovieCard} from './templates.js'

const movieWidth = 300;
const movieGap = 30;
let currentPosition = 38;

const movieTrack = document.getElementById('movie-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

getAllMovies().then((movies) => {
    movies.forEach((movie) => {
        const movieCard = buildMovieCard(movie);
        movieTrack.innerHTML += movieCard;
    });
});
  
const updateMovieTrackPosition = (movement) => {
    currentPosition += movement;
    movieTrack.style.transform = `translateX(${currentPosition}px)`;
};
  
prevBtn.addEventListener('click', () => {
    updateMovieTrackPosition(movieWidth + movieGap);
});
  
nextBtn.addEventListener('click', () => {
    updateMovieTrackPosition(-(movieWidth + movieGap));
});