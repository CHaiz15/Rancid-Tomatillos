import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MoviesPage from '../MoviesPage/MoviesPage.js';
import Login from '../Login/Login'
import MovieDetails from '../MovieDetails/MovieDetails.js'
import { loadMovies } from '../Actions'
import { getMovies } from '../apiCalls';

export class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    getMovies()
      .then(movies => this.props.loadMovies(movies.movies))
      .catch(err => err)
  }

  logout = () => {
    window.location.href = '/';
  }

  render() {
    return (
      <main className="App">
        <nav className='nav-bar'>
          <Link to='/' className='logo'>
            <div className='film-icon'></div>
            <div>Rancid Tomas</div>
          </Link>
          {this.props.user.name ? 
            <div className='user-nav'>
              <h3 className='welcome'>Welcome, {this.props.user.name}</h3>
              <button className='logout-btn' onClick={this.logout}>Logout</button>
            </div>:
            <NavLink className='login-btn' to='/login' type='button'>Login</NavLink>}
        </nav>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={MoviesPage} />
        <Route path='/movies/:id' render={({ match }) => {
          const movie = this.props.movies.find(movie => parseInt(match.params.id) === movie.id)
          if (!movie) {
            return (<div>This movie does not exist! </div>);  
          }
          return <MovieDetails {...movie} />
        }} />
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
})

export const mapDispatchToProps = dispatch => ({
  loadMovies: movies => dispatch(loadMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
