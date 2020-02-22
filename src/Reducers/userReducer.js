export const userReducer = (state = {loggedOut: true}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        name: action.name,
        id: action.id,
      }
    default:
      return state;
  }
}