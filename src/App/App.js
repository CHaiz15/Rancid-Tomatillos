import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MoviesPage from '../MoviesPage/MoviesPage.js';
import Login from '../Login/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(movies => this.setState({movies}))
      .catch(err => err)
  }

  render() {
    return (
      <main className="App">
        <nav>
          <div>Rancid Tomas</div>
          <NavLink className='login-btn' to='/login' type='button'>Login</NavLink>
        </nav>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={MoviesPage} />
      </main>
    );
  }
}

export default App;
