import React, { Component } from 'react';
import './App.scss';
import MoviesPage from '../MoviesPage/MoviesPage.js';

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
          <button className='login-btn'>Login</button>
        </nav>
        <MoviesPage />
      </main>
    );
  }
}

export default App;
