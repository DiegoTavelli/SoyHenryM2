const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MOVIE_FAVORITE':
      return {
        ...state,
        moviesFavorites: [...state.moviesFavorites, action.payload]
      }

    case 'GET_MOVIES':
      return {
        ...state,
        moviesLoaded: action.payload.Search
      }

    case 'GET_MOVIE_DETAIL':
      return {
        ...state,
        movieDetail: action.payload
      }

    case 'REMOVE_MOVIE_FAVORITE':
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(
          movie => movie.id !== action.payload
        )
      }

    default:
      return { ...state }
  }
}

export default rootReducer;