import React from 'react';
import './MovieThumbnail.scss'
import PropTypes from 'prop-types';

export const MovieThumbnail = ({ title, average_rating, backdrop_path }) => {
  return (
    <span onClick={() => window.scrollTo(0, 0)}>
      <img className='movie-img' src={backdrop_path} alt={title + ' image'}></img>
      <div className='thumbnail-txt'>
        <h3 className='thumbnail-title'>{title}</h3>
        <h3 className='thumbnail-rating'>Rating: {Math.round(average_rating)}</h3>
      </div>
    </span>
  )
}

export default MovieThumbnail;

MovieThumbnail.propTypes = {
  title: PropTypes.string,
  average_rating: PropTypes.number,
  backdrop_path: PropTypes.string,
}