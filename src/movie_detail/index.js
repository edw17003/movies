import { getMovieByImdbID } from '../js/externalServices.js';
import { buildMovieDetail } from '../js/templates.js';
import { getParam } from '../js/utils.js';

const imdbID = getParam("imdbID")

getMovieByImdbID(imdbID)
  .then(movie => {
    const movieCard = buildMovieDetail(movie) 
    document.getElementById('movie-details').innerHTML += movieCard
  })
  .catch(error => console.error('Error fetching movie:', error))

