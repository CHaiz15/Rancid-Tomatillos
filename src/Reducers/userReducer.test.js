import { userReducer } from '../reducers/userReducer'

describe('usersReducer', () => {
  it('should return the initial state if there is no state provided', () => {
    const expected = {loggedOut: true}
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_USER', () => {
    const user = {
      id: 23,
      name: 'Kenny',
    }

    const mockAction = {
      type: 'SET_USER',
      name: user.name,
      id: user.id,
    }

    const mockState = {}

    const result = userReducer(mockState, mockAction)
    const expected = {
      id: 23,
      name: 'Kenny',
    }
    expect(result).toEqual(expected)
  })
})



