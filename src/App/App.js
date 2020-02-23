import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MoviesPage from '../MoviesPage/MoviesPage.js';
import Login from '../Login/Login'
import MovieDetails from '../MovieDetails/MovieDetails.js'
import { loadMovies } from '../Actions'
import { getMovies } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    getMovies()
      .then(movies => this.props.loadMovies(movies))
      .catch(err => err)
  }

  logout = () => {
    window.location.href = '/';
  }

  render() {
    return (
      <main className="App">
        <nav className='nav-bar'>
          <div className='logo'>
            <div className='film-icon'></div>
            <div>Rancid Tomas</div>
          </div>
          {this.props.user.name ? 
            <div>
              <h3>Welcome, {this.props.user.name}</h3>
              <button onClick={this.logout}>Logout</button>
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

const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  loadMovies: movies => dispatch(loadMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
