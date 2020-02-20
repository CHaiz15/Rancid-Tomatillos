import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MoviesPage from '../MoviesPage/MoviesPage.js';
import Login from '../Login/Login'
import { loadMovies } from '../Actions'

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
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
