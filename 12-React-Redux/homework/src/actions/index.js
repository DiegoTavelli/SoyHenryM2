
const apiKey = '69551364';


export function getMovies(titulo) {
  return async function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'GET_MOVIES',
          payload: data
        })
      })
  }
}

export function getMovieDetail(idMovie) {
  return async function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'GET_MOVIE_DETAIL',
          payload: data
        })
      })
  }
}

export function addMovieFavorite(payload) {
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload
  };
}

export function removeMovieFavorite(id) {
  return {
    type: 'REMOVE_MOVIE_FAVORITE',
    payload: id
  }
}