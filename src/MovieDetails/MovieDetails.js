import React, { Component } from 'react';
import './MovieDetails.scss';
import { connect } from 'react-redux';
import { postRating } from '../apiCalls';

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
  
  ratingsDisplay = (user, average_rating) => {
    if(user.loggedOut)  {
      return <h3>Avg. Rating: {Math.round(average_rating)}</h3>
    } else {
      return (
        <div className='ratings-container'>
          <h3>Avg. Rating: {Math.round(average_rating)}</h3>
            <div className='add-rating-box'>
            {this.state.currentMovieRating !== 0 && <h3>My Rating: {this.state.currentMovieRating}</h3>} 
              <form>
              <h3>Add Rating: </h3>  
              <select value={this.state.currentMovieRating} onChange={(e) => this.handleChange(e)}>
                {/* <option value="">Rating</option> */}
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
              {/* <input type='button' onClick={() = } value='Rate'/>             */}
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
    const { id, title, poster_path, backdrop_path, release_date, overview, average_rating, user, ratings } = this.props
    return (
     <article className='movie-details-pg' >
      <div className='float-img' style={{backgroundImage: `url(${backdrop_path})`}}></div>
      <section className='movie-info'>
        <h2 className='detail-title'>{title}</h2>
        <p className='detail-release'>Released: {release_date}</p>
        <h4 className='detail-overview'>{overview}</h4>
        <h4>{this.ratingsDisplay(user, average_rating, ratings, id)}</h4> 
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

export default connect(mapStateToProps)(MovieDetails);