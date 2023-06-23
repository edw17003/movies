const path = '/movies.json' 

export function getAllMovies() {
  return fetch(path)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching movies:', error) 
      return [] 
    }) 
}

export function getMovieByImdbID(id = '') {
  const url = id ? `${path}?imdbID=${id}` : path 

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (id) {
        const movie = data.find(movie => movie.imdbID === id) 
        return movie || null 
      } else {
        return data 
      }
    })
    .catch(error => {
      console.error('Error fetching movie:', error) 
      return null 
    }) 
}
