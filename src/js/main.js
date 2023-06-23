import {getAllMovies} from './externalServices.js'
import {buildMovieCard} from './templates.js'

getAllMovies('')
    .then(data => {
        data.forEach(movie => {
            const movieCard = buildMovieCard(movie)
            document.getElementById('movieContainer').innerHTML += movieCard;
        })
    })