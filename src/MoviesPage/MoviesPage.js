import React from 'react';
import MovieThumbnail from '../MovieThumbnail/MovieThumbnail.js';
import './MoviesPage.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MoviesPage = ({ movies }) => {
  const listOfMovies = movies.map(movie => {
    const { id } = movie;
    return <Link to={`/movies/${id}`}><MovieThumbnail {...movie}/></Link>
  })
  return (
    <section className='movies-page'>
      <div className='film-block'></div>
      <h1>Movies...</h1>
      {listOfMovies}
    </section>
  )
}

const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(MoviesPage);