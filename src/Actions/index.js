export const setUser = user => ({
  type: 'SET_USER',
  user
})

export const setRatings = ratings => ({
  type: 'SET_RATINGS',
  ratings
})

export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
})