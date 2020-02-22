export const setUser = user => ({
  type: 'SET_USER',
  id: user.user.id, 
  name: user.user.name,
})

export const setRatings = ratings => ({
  type: 'SET_RATINGS',
  ratings: ratings.ratings
})

export const loadMovies = movies => ({
  type: 'LOAD_MOVIES',
  movies
})