import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { moviesReducer } from './moviesReducer'
import { ratingsReducer } from './ratingsReducer'


const rootReducer = combineReducers({
  user: userReducer,
  ratings: ratingsReducer,
  movies: moviesReducer,
});

export default rootReducer;