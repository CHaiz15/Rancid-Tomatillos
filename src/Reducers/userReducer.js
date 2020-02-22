export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user.user;
    case 'SET_RATINGS':
      state.ratings = action.ratings;
      return state;
    default:
      return state;
  }
}