import React from 'react';
import MovieThumbnail from '../MovieThumbnail/MovieThumbnail.js';
import './MoviesPage.scss';
import { connect } from 'react-redux';

const MoviesPage = ({ movies }) => {
  const listOfMovies = movies.map(movie => <MovieThumbnail {...movie}/>)
  return (
    <section className='movies-page'>
      <div className='film-block'></div>
      <section className='movies-container'>
        {listOfMovies}
      </section>
    </section>
  )
}

const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(MoviesPage);