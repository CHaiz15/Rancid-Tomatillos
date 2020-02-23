import { ratingsReducer } from '../reducers/ratingsReducer'

describe('ratingsReducer', () => {
  it('should return the initial state if there is no state provided', () => {
    const expected = []
    const result = ratingsReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_RATINGS', () => {
    const ratings = [{ 
      id: 731,
      user_id: 23,
      movie_id: 23,
      rating: 9,
      created_at: "2020-02-22T00:09:24.405Z",
      updated_at: "2020-02-22T00:09:24.405Z",
    }]

    const mockAction = {
      type: 'SET_RATINGS',
      ratings,
    }

    const mockState = []

    const result = ratingsReducer(mockState, mockAction)
    const expected = [{ 
      id: 731,
      user_id: 23,
      movie_id: 23,
      rating: 9,
      created_at: "2020-02-22T00:09:24.405Z",
      updated_at: "2020-02-22T00:09:24.405Z",
    }]
    expect(result).toEqual(expected)
  })
})



