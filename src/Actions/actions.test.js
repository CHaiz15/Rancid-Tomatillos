import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of SET_USER', () => {
    const user = {
      id: 23,
      name: 'Kenny',
    }
    const expectedAction = {
      type: 'SET_USER',
      id: 23,
      name: 'Kenny',
    }

    const result = actions.setUser(user)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_RATINGS', () => {
    const ratings = [{ 
      id: 731,
      user_id: 23,
      movie_id: 23,
      rating: 9,
      created_at: "2020-02-22T00:09:24.405Z",
      updated_at: "2020-02-22T00:09:24.405Z",
    }]

    const expectedAction = {
      type: 'SET_RATINGS',
      ratings: [{ 
      id: 731,
      user_id: 23,
      movie_id: 23,
      rating: 9,
      created_at: "2020-02-22T00:09:24.405Z",
      updated_at: "2020-02-22T00:09:24.405Z"
    }]
    }

    const result = actions.setRatings(ratings)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of LOAD_MOVIES', () => {
    const movies = [{
      id: 21,
      title: "Sonic the Hedgehog",
      poster_path: "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
      release_date: "2020-02-12",
      overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      average_rating: 5
    }]

    const expectedAction = {
      type: 'LOAD_MOVIES',
      movies: [{
        id: 21,
        title: "Sonic the Hedgehog",
        poster_path: "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
        release_date: "2020-02-12",
        overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
        average_rating: 5
      }],
    }

    const result = actions.loadMovies(movies)

    expect(result).toEqual(expectedAction)
  })
})