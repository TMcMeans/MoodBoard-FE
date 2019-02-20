import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';

import './UserForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  render() {
    const { name, email } = this.state;
    const { type } = this.props;
    let text;
    let switchText;
    let formBtn;

    if (type === 'login') {
      text = 'log in';
      switchText = 'First time at MoodBoard? Sign up ';
      formBtn = (
        <Link to="/signup" className="login-link">
          here
        </Link>
      )
    } else if (type === 'signup') {
      text = 'sign up';
      switchText = 'Already a user? Log in ';
      formBtn = (
        <Link to="/" className="login-link">
          here
        </Link>
      )
    }

    return (
      <div className="user-form">
        <Logo />
        <h1 className="form-title">{text}!</h1>
        <form action="" className="user-info">
          <input
            type="text"
            placeholder="name"
            className="user-input"
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="email"
            className="user-input"
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="password"
            className="user-input"
          />
          <Link to="/home">
            <button className="standard-btn light form-btn">
              {text}
            </button>
          </Link>
        </form>
        <h2>
          {switchText}
          {formBtn}
          .</h2>
        <button className="info-btn">i</button>
      </div>
    );
  }
}

export default UserForm;
