import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchUser } from '../apiCalls';
import { setUser } from '../Actions';
import { connect } from 'react-redux';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: ''
    }
  }

  handleSubmit = () => {  
    const { email, password } = this.state;
    fetchUser( email, password ) 
      .then(data => this.props.setUser(data))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <section className='login-form'>
        <form>
          <label>Email:</label>
          <input 
            className='email-input'
            name='email' 
            value={this.state.email} 
            onChange={(e) => this.handleChange(e)}
          />
          <label>Password:</label>
          <input 
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

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
