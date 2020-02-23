export const setUser = user => ({
  type: 'SET_USER',
  id: user.id, 
  name: user.name,
})

export const setRatings = ratings => ({
  type: 'SET_RATINGS',
  ratings: ratings
})

export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
})