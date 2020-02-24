import React from 'react';
import './MovieThumbnail.scss'

const MovieThumbnail = ({ title, average_rating, backdrop_path, ratings }) => {

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