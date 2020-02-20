import React from 'react';
import './MovieThumbnail.scss'

const MovieThumbnail = ({ title, average_rating, poster_path }) => {
  return (
    <span className='movie-thumbnail'>
      <img className='movie-img' src={poster_path} alt={title + ' image'}></img>
      <h3>Rating: {average_rating}</h3>
    </span>
  )
}

export default MovieThumbnail;