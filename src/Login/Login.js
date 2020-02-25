import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchUser, getRatings } from '../apiCalls';
import { setUser, setRatings } from '../Actions';
import { connect } from 'react-redux';
import './Login.scss';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: '',
      showError: false,
    }
  }

  handleSubmit = () => {  
    this.setState({showError: false})
    const { email, password } = this.state;
    fetchUser( email, password ) 
      .then(user => {
        getRatings(user.id)
          .then(ratings => {
            this.props.setUser(user)
            this.props.setRatings(ratings.ratings)
          })
      })
      .catch(err => err)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    if (this.state.password && this.state.email) {
      this.handleSubmit()
    } else {
      e.preventDefault()
      this.setState({showError: true})
    }
  }

  render() {
    return(
      <section className='login-container'>
        <form className='login-form'> 
          <label className='login-label'>Email</label>
          <input 
            placeholder='Email'
            className='email-input'
            name='email' 
            value={this.state.email} 
            onChange={(e) => this.handleChange(e)}
          />
          <label className='login-label'>Password</label>
          <input 
            placeholder='Password'
            className='password-input'
            type='password'
            name='password' 
            value={this.state.password} 
            onChange={(e) => this.handleChange(e)}
          />
          <h4 className={this.state.showError ? 'input-error':'hidden'}>Please fill all inputs.</h4>
          <NavLink
            className='login-btn'
            to='/'
            type='button'
            onClick={this.submitForm}
          >ENTER </NavLink>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setRatings: ratings => dispatch(setRatings(ratings))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  setRatings: PropTypes.func.isRequired,
}
