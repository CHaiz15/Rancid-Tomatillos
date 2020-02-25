import React, { Component } from 'react';
import './MovieDetails.scss';
import { setRatings } from '../Actions';
import { connect } from 'react-redux';
import { postRating, getRatings, deleteRating } from '../apiCalls';
import PropTypes from 'prop-types';


export class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      currentMovieRating: 0,
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({currentMovieRating: parseInt(e.target.value)})
  }

  updateRatings = () => {
    if(this.props.ratings.find(currentRating => currentRating.movie_id === this.props.id)){ 
      deleteRating(this.props.ratings.find(currentRating => currentRating.movie_id === this.props.id).id, this.props.user.id)
    }
    postRating(this.state.currentMovieRating, this.props.user.id, this.props.id)
      .then(res => {
        getRatings(this.props.user.id)
        .then(ratings => this.props.setRatings(ratings.ratings))
      })
  }
  
  ratingsDisplay = (user, average_rating) => {
    if(user.loggedOut)  {
      return <h3>Avg. Rating: {Math.round(average_rating)}</h3>
    } else {
      return (
        <div className='ratings-container'>
          <h3 className='rating'>Avg. Rating:  {Math.round(average_rating)}</h3>
            <div>
              {this.props.ratings.find(currentRating => currentRating.movie_id === this.props.id) 
                &&
              <h3 className='rating'>My Rating:  {this.props.ratings.find(currentRating => currentRating.movie_id === this.props.id).rating}</h3>} 
              <form className='add-rating'>
                <h3 className='rating'>Add Rating: </h3> 
                  <div className='add-rating-box'>
                    <select className='rating-select' value={this.state.currentMovieRating} onChange={(e) => this.handleChange(e)}>
                      <option value="0">-</option>
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
                    <input className='rate-btn' type='button' onClick={() => this.updateRatings()} value='Rate'/>            
                  </div>
              </form> 
            </div>
        </div>
      )
    }
  }

  componentDidMount = () => {
    if(!this.props.user.loggedOut && this.props.ratings.find(currentRating => currentRating.movie_id === this.props.id)) {
      this.setState({currentMovieRating: this.props.ratings.find(currentRating => currentRating.movie_id === this.props.id).rating})
    }
  }

  render() {
    const { id, title, poster_path, backdrop_path, release_date, overview, average_rating, user } = this.props
    
    return (
     <article className='movie-details-pg' >
      <div className='float-img' style={{backgroundImage: `url(${backdrop_path})`}}></div>
      <section className='movie-info'>
        <h2 className='detail-title'>{title}</h2>
        <p className='detail-release'>Released: {release_date}</p>
        <h4 className='detail-overview'>{overview}</h4>
        {this.ratingsDisplay(user, average_rating, id)}
      </section>
      <img className='detail-img' alt={title + 'image'}src={poster_path}/>
     </article>
    ) 
  }
}

const mapStateToProps = state => ({
  ratings: state.ratings,
  user: state.user,
})

export const mapDispatchToProps = dispatch => ({
  setRatings: ratings => dispatch(setRatings(ratings))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

MovieDetails.propTypes = {
  setRatings: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string,
  average_rating: PropTypes.number,
  user: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
}