import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchUser, getRatings } from '../apiCalls';
import { setUser, setRatings } from '../Actions';
import { connect } from 'react-redux';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: 654321
    }
  }

  handleSubmit = () => {  
    const { email, password } = this.state;
    fetchUser( email, password ) 
      .then(user => {
        getRatings(user.id)
          .then(ratings => {
            this.props.setUser(user)
            this.props.setRatings(ratings.ratings)
          })
      })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <section className='login-container'>
        <form className='login-form'> 
          <label>Email:</label>
          <input 
            placeholder='Email'
            className='email-input'
            name='email' 
            value={this.state.email} 
            onChange={(e) => this.handleChange(e)}
          />
          <label>Password:</label>
          <input 
            placeholder='Password'
            className='password-input'
            type='password'
            name='password' 
            value={this.state.password} 
            onChange={(e) => this.handleChange(e)}
          />
          <NavLink
            className='login_button'
            to='/'
            type='button'
            onClick={this.handleSubmit}
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
