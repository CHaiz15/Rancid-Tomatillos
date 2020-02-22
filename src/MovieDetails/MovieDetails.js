import React from 'react';
import './MovieDetails.scss';
import { connect } from 'react-redux';

const MovieDetails = ({ id, title, backdrop_path, release_date, overview, average_rating, user, ratings }) => {
  let foundRating = 0;
  
  if(!user.loggedOut && ratings.find(currentRating => currentRating.movie_id === id)) {
    foundRating = ratings.find(currentRating => currentRating.movie_id === id).rating
  }
  
  const ratingsDisplay = () => {
    if(user.loggedOut)  {
      return <h3>Avg. Rating: {average_rating}</h3>
    } else {
      return <div>
                <h3>Avg. Rating: {average_rating}</h3>
                  {foundRating === 0 ? 
                    <>
                      <h3>Add Rating: </h3>  
                        <div>
                          <select>
                            <option value="0">select rating:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                      </>:
                    <h3>My Rating: {foundRating}</h3>
                  }
              </div>
    }
  }

  return (
    <article className='movie-details-pg'>
      <h2>{title}</h2>
      <p>Released: {release_date}</p>
      <h4>{ratingsDisplay()}</h4>
      <h4>{overview}</h4>
      <img className='detail-img' alt={title + 'image'}src={backdrop_path}/>
    </article>
  )
}

const mapStateToProps = state => ({
  ratings: state.ratings,
  user: state.user,
})

export default connect(mapStateToProps)(MovieDetails);