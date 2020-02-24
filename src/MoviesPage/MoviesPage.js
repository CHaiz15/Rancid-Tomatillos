import React from 'react';
import MovieThumbnail from '../MovieThumbnail/MovieThumbnail.js';
import './MoviesPage.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const MoviesPage = ({ movies }) => {
  const listOfMovies = movies.map(movie => {
    const { id } = movie;
    return <Link className='movie-thumbnail' to={`/movies/${id}`}><MovieThumbnail {...movie}/></Link>
  })
  return (
    <section className='movies-page'>
      <div className='film-block'></div>
      <section className='movies-container'>
        {listOfMovies}
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(MoviesPage);