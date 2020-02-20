import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ id, title, backdrop_path, release_date, overview, average_rating }) => {
  return (
    <article className='movie-details-pg'>
      <h2>{title}</h2>
      <p>Released: {release_date}</p>
      <h3>Rating: {average_rating}</h3>
      <h4>{overview}</h4>
      <img className='detail-img' alt={title + 'image'}src={backdrop_path}/>
    </article>
  )
}

export default MovieDetails;